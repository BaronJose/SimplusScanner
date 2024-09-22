// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scanner: {
    width: '100%',
    height: height / 2,
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 10,
    width: '80%',
  },
  clearButton: {
    backgroundColor: '#FFD700',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  item: {
    padding: 15,
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  message: {
    textAlign: 'center',
    margin: 20,
    fontSize: 18,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  swipeActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
    padding: 10,
    backgroundColor: '#C0C0C0',
  },
  editButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default styles;
