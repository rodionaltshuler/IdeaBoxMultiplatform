import React from "react";
import {View, ListView, Text, StyleSheet, StatusBar} from 'react-native';

class IdeaItem extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={{flex:1, height:56, backgroundColor: '#d4dadd', alignItems:'stretch', justifyContent:'center'}}>
                <Text style={styles.itemtext}>{this.props.idea}</Text>
            </View>
        );
    }

}

IdeaItem.propTypes = {
    idea: React.PropTypes.string
};

const styles = StyleSheet.create({
    itemtext: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default IdeaItem;

