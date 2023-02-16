/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  
  View,
} from 'react-native';
import { BookCard } from './src/components/BookCard/BookCard';
import HomeScreen from './src/components/BookCard/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BooksScreen } from './src/domain/books/BooksScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookCart from './src/domain/books/BookCart';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
              return (
                
            <NavigationContainer>
                <Tab.Navigator>
                <Tab.Screen name="Home" component={BookCard} />
                <Tab.Screen name="Books" component={BooksScreen} />
                <Tab.Screen name="Cart" component={BookCart} />
              </Tab.Navigator>
              </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  headerStyle:{
    fontSize:30,
    padding:10,
    textAlign:'center',
    color:'tomato',
    fontWeight:600
  }
});

export default App;
