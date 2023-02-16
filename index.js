/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import { MyStore } from './src/redux/MyStore';

const AppWrapper = () => (
  <Provider store={MyStore}>
    <App></App>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
