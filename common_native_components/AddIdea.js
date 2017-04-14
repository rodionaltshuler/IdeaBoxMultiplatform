import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import DefaultButton from './DefaultButton';

class AddIdea extends React.Component {

    static navigationOptions = {
        title: 'Submit your idea',
        headerStyle: {backgroundColor: '#4fcb54'},
        headerTintColor: 'white',
    };

    constructor(props, context) {
        super(props, context);
        this.state = { title: "" }
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
                <DefaultButton title='Submit'/>
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

export default AddIdea;