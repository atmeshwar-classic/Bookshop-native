import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

import AppNavigation from './src/navigation/appNavigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
