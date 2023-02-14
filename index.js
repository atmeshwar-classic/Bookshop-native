/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';

const AppWrapper = () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
