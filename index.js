import React from 'react'
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux'
import configureStore from './src/configureStore'
import App from './src/screens/app';

const store = configureStore()

const SmartQueue = () => {
    <Provider store={store}>
        <App />
    </Provider>
}

AppRegistry.registerComponent('SmartQueue', () => App);
