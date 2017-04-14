import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

function DefaultButton(props) {
    return (
        <TouchableOpacity
            style={{margin: 8}}
            onPress={props.onPress}>
            <View style={{height: 56, backgroundColor: '#af4408', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, textAlign: 'center', fontWeight: '600', color: 'white'}}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default DefaultButton;