/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BooksScreen} from './domain/books/BooksScreen';
import {Cart} from './domain/cart/Cart';
import {cartSelector} from './domain/cart/cart.slice';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const {cart} = useSelector(cartSelector);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Books') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            return <Ionicons name={`${iconName}`} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Books" component={BooksScreen} />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{tabBarBadge: cart.length}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
