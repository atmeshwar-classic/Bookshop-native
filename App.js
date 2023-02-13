/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/domain/books/HomeScreen";
 

const navigator = createStackNavigator(
  {
    Home: HomeScreen 
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "JyotiTest",
    },
  }
);

export default createAppContainer(navigator);

