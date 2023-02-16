import React, { useState } from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import styles from './Loader.style';

const Loader = () => {

  return  <View style={[styles.container, styles.horizontal]}>    
    <ActivityIndicator size="large" />    
  </View>
}

export default Loader;