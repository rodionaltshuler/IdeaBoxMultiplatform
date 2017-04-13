import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import {Provider} from 'react-redux';
import IdeasPage from './data_components/IdeasPage';
import IdeasList from './common_native_components/IdeasList';

import configureStore from './common/store/configureStore';
import initialState from './common/store/initialState';

const store = configureStore(initialState);
export default class IdeaBoxMultiPlatform extends Component {
  render() {
    return (
        <Provider store={store}>
          <IdeasPage>
            <IdeasList/>
          </IdeasPage>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('IdeaBoxMultiPlatform', () => IdeaBoxMultiPlatform);
