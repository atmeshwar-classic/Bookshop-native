import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';

type props = {
  children: ReactNode;
  image?: any;
};

const HomeContainer: React.FC<props> = ({children, image}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <ImageBackground
      style={{height: height - 150}}
      resizeMode="cover"
      source={image}>
      {children}
    </ImageBackground>
  );
};

export default HomeContainer;
