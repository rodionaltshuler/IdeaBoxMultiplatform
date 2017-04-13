import React from "react";
import {View, Text, StyleSheet} from 'react-native';

class IdeasList extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log('Rendeing IdeasList: ' + this.props.ideas);
        console.log(this.props.ideas);
        return (
            <View style={styles.container}>
                <Text style={styles.itemtext}>Here are the ideas:</Text>
                <Text style={styles.itemtext}>
                    {this.props.ideas}
                </Text>
            </View>
        );
    }


}

IdeasList.propTypes = {
    ideas: React.PropTypes.array
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemtext: {
        fontSize: 20,
        textAlign: 'left'
    }
});

export default IdeasList;

