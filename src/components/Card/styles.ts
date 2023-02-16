import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 50,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 2,
  },
  elevation: {
    elevation: 1,
    shadowColor: 'black',
  },
  card_detail: {
    display: 'flex',
    alignItems: 'center',
  },
  data_list:{
    flex: 5,
  }
});
