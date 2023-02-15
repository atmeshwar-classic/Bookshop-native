/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import store from './src/store'


function Main() {

    // console.log("Global Store ", store.dispatch())
    return (
        <Provider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    )
}

export default Main;

AppRegistry.registerComponent(appName, () => Main);
