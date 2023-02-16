import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  {BooksScreen} from './src/domain/books/BooksScreen';
import {CartScreen}  from './src/domain/books/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import { AppDispatch, RootState } from './src/store';
const Tab = createBottomTabNavigator();

export default function App() {

  const dispatch = useDispatch<AppDispatch>();
  const {isCartOpen, cartItems} = useSelector((state:any)=> state.cart);
  
  const cartQuantity = cartItems.length;
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Books') {
            iconName = focused ? 
            'book-open'
            : 'book-open'
          }
         else if (route.name === 'Cart') {
            iconName = focused
              ? 'cart-outline'
              : 'cart-outline'
          } 
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    
      >
        <Tab.Screen name="Books" component={BooksScreen} />
        <Tab.Screen name="Cart" component={CartScreen}  options={{ tabBarBadge: cartQuantity }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};