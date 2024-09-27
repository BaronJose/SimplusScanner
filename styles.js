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
    backgroundColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 35, // Adjust header title font size as needed
    color: '#ffffff', // Set title color
  },
  menuButton: {
    padding: 15, // Increase padding for easier pressing
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5, // Add some margin
  },
  menuButtonText: {
    fontSize: 40, // Increase font size for better visibility
    color: '#ffffff', // Set text color
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    marginVertical: 10,
    textAlign: 'center',
  },

});
