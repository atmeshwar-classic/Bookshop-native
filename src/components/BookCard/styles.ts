import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bookStyle: {
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,
  },
  bookHead: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.4,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'green',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: 'grey',
    letterSpacing: 0.4,
    marginTop: 4,
  },
  addBtnStyle: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    fontWeight: 'bold',
  },
});
