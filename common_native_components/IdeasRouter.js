import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

import IdeasPage from './../data_components/IdeasPage';
import AddIdea from './AddIdea';

class IdeasRouter extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const Router = StackNavigator({
            IdeasList: {
                screen: IdeasPage,
                title: 'Ideas'
            },
            AddIdea: {
                screen: AddIdea,
                title: 'Submit your idea',
            }
        },
            {
                headerTintColor: '#4fcb54'
            });
        return <Router />;
    }

}

export default IdeasRouter;