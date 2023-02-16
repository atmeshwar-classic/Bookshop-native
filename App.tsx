/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import MainContainer from './src/Navigation/MainContainer';
import store from './src/store';

function App() {
  return (
    <Provider  store={store}>

  <MainContainer/>
    </Provider>
    
  );
}

export default App;