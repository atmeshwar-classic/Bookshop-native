/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationRoute from './src/navigation/navigationRoute';
const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  return (
   <NavigationRoute/>
  )
}

export default App;
