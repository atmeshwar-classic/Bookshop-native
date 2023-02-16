
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
// Screens
import BookScreen from "../domain/books/BookScreen";
import CartScreen from "../domain/Cart/CartScreen";


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
<NavigationContainer>
    <Tab.Navigator
      initialRouteName="Books"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Books"
        component={BookScreen}
        options={{
          tabBarLabel: 'Books',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
       
    </Tab.Navigator>
</NavigationContainer>
  );
}
export default MainContainer;