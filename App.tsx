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

function App(): JSX.Element {
              return (
    <SafeAreaProvider>
    <SafeAreaView>   
   
    <Text  style={styles.headerStyle}>Bookshop</Text>
    
   
     
      <ScrollView>

      <BookCard/>
      <HomeScreen/>
     
      
    
      </ScrollView>  
     
    </SafeAreaView>
    </SafeAreaProvider>
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
