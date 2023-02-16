import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Books from '../view/booksDetail';
import Cart from '../view/cart';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const {cart} = useSelector((state: any) => state.books);
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Books">
        <Tab.Screen name="Books" component={Books} />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{tabBarBadge: cart.length}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
