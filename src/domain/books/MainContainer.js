
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import { Text, StyleSheet,View,Button ,TouchableOpacity} from "react-native";


// Screens
import BookScreen from "./BookScreen";
import CartScreen from "./CartScreen";

//Screen names
const bookName = "Books";
const cartName = "Cart";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={bookName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            console.log("routeName:",rn);
            if (rn === bookName) {
              iconName = focused ? 'search' : 'search';
              console.log("iconName:",iconName);
            } else if (rn === cartName) {
              iconName = focused ? 'list' : 'list-outline';
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10
          },
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        }}>

        <Tab.Screen name={bookName} component={BookScreen} />
        <Tab.Screen name={cartName} component={CartScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainContainer;