import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import IdeasRouter from './common_native_components/IdeasRouter';

import configureStore from './common/store/configureStore';
import initialState from './common/store/initialState';

const store = configureStore(initialState);

console.disableYellowBox = true;

export default class IdeaBoxMultiPlatform extends Component {

  render() {
    return (
        <Provider store={store}>
            <IdeasRouter/>
        </Provider>
    );
  }
}



AppRegistry.registerComponent('IdeaBoxMultiPlatform', () => IdeaBoxMultiPlatform);
