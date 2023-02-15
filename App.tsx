/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BooksScreen from './src/domain/books/BooksScreen';
import CartScreen from './src/domain/cart/CartScreeen';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        
        <Stack.Screen
          name="Books"
          component={BooksScreen}
          options={{title: 'Books List'}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{title: 'Cart'}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
