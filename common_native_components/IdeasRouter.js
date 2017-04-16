import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

import IdeasPage from './../data_components/IdeasPage';
import AuthPage from './../data_components/AuthPage';
import AddIdea from './AddIdea';

class IdeasRouter extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const Router = StackNavigator({
            AuthPage: {
                screen: AuthPage
            },
            IdeasList: {
                screen: IdeasPage
            },
            AddIdea: {
                screen: AddIdea,
            }
        },
            {
                headerTintColor: '#4fcb54'
            });
        return <Router />;
    }

}

export default IdeasRouter;