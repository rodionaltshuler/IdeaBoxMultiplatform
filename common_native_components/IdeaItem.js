import React from "react";
import {View, Image, TouchableOpacity, ListView, Text, StyleSheet, StatusBar} from 'react-native';

const thumbUp = require('../images/ic_thumb_up/ic_thumb_up.png');
const thumbDown = require('../images/ic_thumb_down/ic_thumb_down.png');

class IdeaItem extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.getUpvotesCount = this.getUpvotesCount.bind(this);
        this.getDownvotesCount = this.getDownvotesCount.bind(this);
        this.onDownvote = this.onDownvote.bind(this, this.props.idea);
        this.onUpvote = this.onUpvote.bind(this, this.props.idea);
    }

    getUpvotesCount() {
        return this.props.idea.upvotes ? Object.keys(this.props.idea.upvotes).length : 0;
    }

    getDownvotesCount() {
        return this.props.idea.downvotes ? Object.keys(this.props.idea.downvotes).length : 0;
    }

    onDownvote(idea) {
        this.props.onDownvote(idea);
    }

    onUpvote(idea) {
        this.props.onUpvote(idea);
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
                    <TouchableOpacity onPress={this.onUpvote}>
                        <Image style={styles.actionIcon} source={thumbUp} onPress={this.props.onUpvote}/>
                    </TouchableOpacity>
                    <Text style={styles.smallText}>{this.getUpvotesCount()}</Text>
                    <TouchableOpacity onPress={this.onDownvote}>
                        <Image style={styles.actionIcon} source={thumbDown}/>
                    </TouchableOpacity>
                    <Text style={styles.smallText}>{this.getDownvotesCount()}</Text>
                </View>
            </View>
        );
    }

}

IdeaItem.propTypes = {
    idea: React.PropTypes.object.isRequired,
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired
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

