import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as loginActions from '../common/actions/loginActions';
import DefaultButton from './../common_native_components/DefaultButton'
import { View } from 'react-native';

import { NavigationActions } from 'react-navigation';

class AuthPage extends React.Component {

    static navigationOptions = {
        title: 'Lohika Idea Box',
        headerStyle: {backgroundColor: '#4fcb54'},
        headerTintColor: 'white',
    };

    constructor(props, context) {
        super(props, context);
        this.onPressLogin = this.onPressLogin.bind(this);
        this.navigateToIdeas = this.navigateToIdeas.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.user) {
            console.log('Navigating to ideas page');
            this.navigateToIdeas();
        }
    }

    navigateToIdeas() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'IdeasList'})]
        });
        this.props.navigation.dispatch(resetAction);
    }


    onPressLogin() {
        this.props.actions.loginAnonymously();
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <DefaultButton
                title="Login anonymously"
                onPress={this.onPressLogin}
                />
            </View>
        );
    }


}

AuthPage.propTypes = {
    user: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

