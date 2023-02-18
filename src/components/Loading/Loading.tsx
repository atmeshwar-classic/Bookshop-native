import React from 'react';
import {View, Text} from 'react-native';
import {loadingStyles as styles} from './styles';
interface textProps {
  text: string;
}

export const Loading = ({text}: textProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};
