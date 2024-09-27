import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import styles from './styles'; // Assuming you have styles for your header

const CustomHeader = ({ title, onSaveCSV, onLoadCSV }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Appbar.Header style={styles.headerContainer}>
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>
        }
      >
        <Menu.Item onPress={onSaveCSV} title="Save to CSV" />
        <Menu.Item onPress={onLoadCSV} title="Load CSV" />
      </Menu>
      <Appbar.Content title={title} titleStyle={styles.headerTitle} />
    </Appbar.Header>
  );
};


export default CustomHeader;
