
import React from "react";
import { Text, StyleSheet,View,Button ,TouchableOpacity} from "react-native";
 
const HomeScreen = ({navigation}) => {
   return(
   <View >
   <Text></Text>
  
  <Button 
   onPress = {() => navigation.navigate('books') }
   title = "Go to Books Screen"
  />
   </View>
  );
};
 
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;
