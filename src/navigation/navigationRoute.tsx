/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BooksScreen from '../domain/books/BooksScreen';
import CartScreen from '../domain/cart/CartScreeen';

const Stack = createNativeStackNavigator();


function NavigationRoute(): JSX.Element {
  
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

export default NavigationRoute;
