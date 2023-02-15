import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  {BooksScreen} from './src/domain/books/BooksScreen';
import {CartScreen}  from './src/domain/books/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Books') {
            iconName = focused ? 
            <Image source={require('../Bookshop-native/assets/shopping.png')}/>
            : <Image source={require('../Bookshop-native/assets/shopping.png')} />;
          }
         else if (route.name === 'Cart') {
            iconName = focused
              ? <Image source={require('../Bookshop-native/assets/open-book.png')}/>
              : <Image source={require('../Bookshop-native/assets/open-book.png')} />;
          } 
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    
      >
        <Tab.Screen name="Books" component={BooksScreen} />
        <Tab.Screen name="Cart" component={CartScreen}  options={{ tabBarBadge: 3 }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};