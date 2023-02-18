import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 12,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'tomato',
    padding: 12,
    textAlign: 'center',
  },
});
