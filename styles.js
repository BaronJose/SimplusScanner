import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    height: 60,
    backgroundColor: '#007bff', // Changed to a blue color for better visibility
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns the title and menu button on opposite sides
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 30, // Adjust header title font size as needed
    color: '#ffffff', // Set title color
  },
  menuButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  menuButtonText: {
    fontSize: 40,
    color: '#ffffff',
  },
  scanner: {
    height: 300,
    marginVertical: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: '#ff5c5c',
  },
  loadButton: {
    backgroundColor: '#4caf50',
  },
  swipeActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 15,
  },
  editButton: {
    backgroundColor: '#ffa500',
    padding: 10,
  },
  deleteButton: {
    backgroundColor: '#ff5c5c',
    padding: 10,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  editBox: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // Add shadow effect on Android
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
