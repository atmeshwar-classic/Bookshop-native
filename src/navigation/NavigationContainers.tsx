import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BooksScreen } from '../domain/books/BooksScreen';
import { CartScreen } from '../domain/books/CartScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { cartSelector } from '../domain/books/cartSlice';

const Tab = createBottomTabNavigator();

export default function NavigationContainers() {

  const dispatch = useDispatch<AppDispatch>();
  //const {cartItems} = useSelector((state:any)=> state.cart);
  
  const {cartItems} = useSelector(cartSelector);
 
  const cartQuantity = cartItems.length;
  console.log("cartQuantity"+cartQuantity)
  
  return (
    <NavigationContainer >
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
        
      })
    }
      >
        <Tab.Screen name="Books" component={BooksScreen} />
        <Tab.Screen name="Cart"  component={CartScreen}  options={{ tabBarBadge: cartQuantity                       
      
 }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};