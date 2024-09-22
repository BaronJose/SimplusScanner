import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, FlatList, SafeAreaView, Modal, TextInput, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import styles from './styles'; // Assuming styles.js is in the same folder

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scannedItems, setScannedItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [scannedData, setScannedData] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const swipeableRefs = useRef(new Map());

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScanning(false);
    setScannedData(data);

    const existingItem = scannedItems.find(item => item.data === data);
    if (existingItem) {
      setScannedItems(prevItems =>
        prevItems.map(item =>
          item.data === data ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setModalVisible(true);
    }
  };

  const handleAddItem = () => {
    const newKey = `${Date.now()}-${Math.random()}`; // Ensure a unique key
    if (editingItem) {
      setScannedItems(prevItems =>
        prevItems.map(item =>
          item.key === editingItem.key ? { ...item, name: newItemName } : item
        )
      );
      closeSwipeable(editingItem.key);
    } else {
      setScannedItems(prevItems => [
        ...prevItems,
        { key: newKey, name: newItemName, data: scannedData, count: 1 },
      ]);
    }
    setModalVisible(false);
    setNewItemName('');
    setEditingItem(null);
  };

  const handleStartScanning = () => {
    setScanned(false);
    setScanning(true);
  };

  const handleStopScanning = () => {
    setScanning(false);
  };

  const handleDeleteItem = (itemKey) => {
    setScannedItems(prevItems => prevItems.filter(item => item.key !== itemKey));
    closeSwipeable(itemKey);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setNewItemName(item.name);
    setModalVisible(true);
  };

  const closeSwipeable = (key) => {
    const swipeableRef = swipeableRefs.current.get(key);
    if (swipeableRef) {
      swipeableRef.close();
    }
  };

  const renderRightActions = (item) => (
    <View style={styles.swipeActions}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleEditItem(item)}
      >
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteItem(item.key)}
      >
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const generateCSV = (items) => {
    let csvContent = 'Item Name,Barcode,Count\n'; 
    items.forEach(item => {
      csvContent += `${item.name},${item.data},${item.count}\n`;
    });
    return csvContent;
  };

  const saveCSV = async () => {
    const csvContent = generateCSV(scannedItems);
    const fileUri = `${FileSystem.documentDirectory}scanned_items.csv`;

    try {
      await FileSystem.writeAsStringAsync(fileUri, csvContent);
      alert('File saved successfully!');

      const shareAvailable = await Sharing.isAvailableAsync();
      if (shareAvailable) {
        await Sharing.shareAsync(fileUri);
      }
    } catch (error) {
      console.error('Error saving file: ', error);
    }
  };

  // Load file and parse CSV
  const loadFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'text/csv',
        copyToCacheDirectory: true,
      });
  
      // Log the result for debugging
      console.log('Document Picker Result:', result);
  
      // Check if the user selected a file successfully
      if (result.assets && result.assets.length > 0) {
        const fileUri = result.assets[0].uri; // Access the file URI correctly
        console.log('Loaded File URI:', fileUri); // Log the URI
  
        // Read the file content
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        console.log('Loaded File Content:', fileContent); // Log the content
  
        // Proceed to parse the CSV
        parseCSV(fileContent);
      } else {
        alert('File load canceled or no file selected');
        console.log('File load canceled.');
      }
    } catch (error) {
      console.error('Error loading file: ', error);
      alert('An error occurred while loading the file.');
    }
  };

  // Parse CSV content and update scannedItems
  const parseCSV = (csvContent) => {
    try {
      const lines = csvContent.split('\n').filter(Boolean);
      if (lines.length > 0 && lines[0].includes('Item Name,Barcode,Count')) {
        const newItems = lines.slice(1).map(line => {
          const [name, data, count] = line.split(',');
          return { key: `${Date.now()}-${Math.random()}`, name, data, count: parseInt(count, 10) };
        }).filter(item => item.name && item.data);
        
        setScannedItems(prevItems => [...prevItems, ...newItems]);
        Alert.alert('Success', 'File loaded successfully');
      } else {
        Alert.alert('Error', 'Invalid CSV format. Ensure the header is: Item Name,Barcode,Count');
      }
    } catch (error) {
      Alert.alert('Error', 'Error parsing file content.');
      console.error('Error parsing CSV: ', error);
    }
  };
  
  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        {scanning && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.scanner}
          />
        )}

        <FlatList
          data={scannedItems}
          renderItem={({ item }) => (
            <Swipeable
              ref={(ref) => swipeableRefs.current.set(item.key, ref)}
              renderRightActions={() => renderRightActions(item)}
            >
              <View style={styles.item}>
                <Text style={styles.itemText}>Name: {item.name}</Text>
                <Text style={styles.itemText}>Barcode: {item.data}</Text>
                <Text style={styles.itemText}>Count: {item.count}</Text>
              </View>
            </Swipeable>
          )}
          keyExtractor={(item) => item.key}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={scanning ? handleStopScanning : handleStartScanning}
          >
            <Text style={styles.buttonText}>
              {scanning ? 'Stop Scanning' : 'Start Scanning'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.clearButton]}
            onPress={saveCSV}
          >
            <Text style={styles.buttonText}>Save to CSV</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.loadButton]}
            onPress={loadFile}
          >
            <Text style={styles.buttonText}>Load CSV</Text>
          </TouchableOpacity>
        </View>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {editingItem ? 'Edit Item Name' : 'Add Item Name'}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter item name"
                value={newItemName}
                onChangeText={setNewItemName}
              />
              <Button title={editingItem ? "Save Changes" : "Add Item"} onPress={handleAddItem} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
