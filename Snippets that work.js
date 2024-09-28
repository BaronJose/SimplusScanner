import { Appbar, Menu } from 'react-native-paper';  // Import Provider

// Custom Header
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