import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as ideasActions from './../common/actions/ideasActions';

import {View, TextInput, Text, StyleSheet, ActivityIndicator} from 'react-native';
import DefaultButton from './DefaultButton';
import requestStatus from './../common/actions/requestStatus';

class AddIdea extends React.Component {

    static navigationOptions = {
        title: 'Submit your idea',
        headerStyle: {backgroundColor: '#4fcb54'},
        headerTintColor: 'white',
    };

    constructor(props, context) {
        super(props, context);
        this.state = {ideaInput: ""};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.actions.submitIdea(this.state.ideaInput, this.props.user.uid);
    }

    componentWillReceiveProps(nextProps) {
        console.log('AddIdea will receive props!');
        if (nextProps.submitIdeaStatus) {
            const status = nextProps.submitIdeaStatus;
            console.log('Processing submitIdeaStatus: ' + JSON.stringify(status));
            switch (status.status) {
                case requestStatus.COMPLETED: {
                    this.setState({ideaInput: "", isLoading: false, message: 'Idea was submitted successfully!'});
                    this.props.navigation.goBack = this.props.navigation.goBack.bind(this);
                    setTimeout(this.props.navigation.goBack, 3000);
                    break;
                }
                case requestStatus.FAILED: {
                    this.setState({isLoading: false, message: status.message});
                    break;
                }
                case requestStatus.IN_PROGRESS: {
                    this.setState({isLoading: true});
                    console.log('Idea submission is in progress');
                    break;
                }
                default: {
                    this.setState({isLoading: false});
                }
            }
        }
    }

    render() {
        const loading = this.state.isLoading ?
            <ActivityIndicator animating={true} /> :
            <Text style={styles.messageText}>{this.state.message}</Text>;

        console.log('Rendering with state.loading = ' + this.state.isLoading);

        return (
            <View style={styles.container}>
                {loading}
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.setState({ideaInput: text})}
                    placeholder='Type your idea here'
                    multiline={true}
                    value={this.state.ideaInput}
                />
                <DefaultButton title='Submit' onPress={this.onSubmit}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center'
    },
    inputField: {
        height: 56,
        margin: 8,
        fontSize: 20
    },
    messageText: {
        fontSize: 16,
        alignSelf: 'stretch',
        textAlign: 'center'
    }

});

function mapStateToProps(state, ownProps) {
    return {
        ideas: state.ideas,
        user: state.user,
        submitIdeaStatus: state.submitIdeaStatus
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ideasActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIdea);