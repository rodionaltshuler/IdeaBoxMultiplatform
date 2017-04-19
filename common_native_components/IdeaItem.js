import React from "react";
import {View, Image, TouchableOpacity, ListView, Text, StyleSheet, StatusBar} from 'react-native';

const thumbUp = require('../images/ic_thumb_up/ic_thumb_up.png');
const thumbDown = require('../images/ic_thumb_down/ic_thumb_down.png');

class IdeaItem extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.getUpvotesCount = this.getUpvotesCount.bind(this);
        this.getDownvotesCount = this.getDownvotesCount.bind(this);
    }

    getUpvotesCount() {
        return this.props.idea.upvotes ? Object.keys(this.props.idea.upvotes).length : 0;
    }

    getDownvotesCount() {
        return this.props.idea.downvotes ? Object.keys(this.props.idea.downvotes).length : 0;
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    height: 64,
                    backgroundColor: '#ffffff',
                    alignItems: 'stretch',
                    justifyContent: 'center'
                }}>
                <TouchableOpacity>
                    <Text style={styles.itemtext}>{this.props.idea.title}</Text>
                </TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Image style={styles.actionIcon} source={thumbUp}/>
                    <Text style={styles.smallText}>{this.getUpvotesCount()}</Text>
                    <Image style={styles.actionIcon} source={thumbDown}/>
                    <Text style={styles.smallText}>{this.getDownvotesCount()}</Text>
                </View>
            </View>
        );
    }

}

IdeaItem.propTypes = {
    idea: React.PropTypes.object
};

const styles = StyleSheet.create({
    itemtext: {
        fontSize: 20,
        textAlign: 'center'
    },
    actionIcon: {
        margin: 4
    },
    smallText: {
        margin: 4
    }
});

export default IdeaItem;

