import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0, 
      bottom: 0, 
      left: 0,
      right: 0,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#00000044'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });
  

  export default styles;