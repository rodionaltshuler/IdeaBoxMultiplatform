import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as ideasActions from './../common/actions/ideasActions';

import {View, TextInput, Text, StyleSheet} from 'react-native';
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
                    console.log('Idea ' + status.idea.title + ' submitted');
                    this.props.navigation.goBack();
                    break;
                }
                case requestStatus.FAILED: {
                    console.log('Error submitting idea: ' + status.message);
                    break;
                }
                case requestStatus.IN_PROGRESS: {
                    console.log('Idea submission is in progress');
                    break;
                }
                default: {
                    //do nothing
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
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