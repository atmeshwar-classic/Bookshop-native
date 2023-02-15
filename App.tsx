/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import MainContainer from './src/domain/books/MainContainer';
import store from './src/domain/books/store';

function App() {
  return (
    <Provider  store={store}>

  <MainContainer/>
    </Provider>
    
  );
}

export default App;