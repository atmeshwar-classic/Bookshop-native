import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold'
  },
  item: {
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
},

totalAmout: {
  padding: 20,
  marginTop: 10,
  borderRadius: 10,
  fontWeight: 'bold',
  fontSize:30,
  marginHorizontal: 5,
},
});


export const stylesCartScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start'
  },

  name: {
    fontWeight: 'bold'
  },

  item: {
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
},
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    marginTop: 30,
    fontWeight: 'bold',
    fontSize:30,
    position: 'absolute',
    bottom:5,
    left:0,
  }
});