import React from "react";
import {View, TouchableOpacity, ListView, Text, StyleSheet, StatusBar} from 'react-native';

class IdeaItem extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View
                style={{flex:1, height:56, backgroundColor: '#ffffff', alignItems:'stretch', justifyContent:'center'}}>
                <TouchableOpacity>
                    <Text style={styles.itemtext}>{this.props.idea}</Text>
                </TouchableOpacity>
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

