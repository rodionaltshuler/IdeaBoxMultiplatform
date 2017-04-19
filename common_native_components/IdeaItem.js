import React from "react";
import {View, Image, TouchableOpacity, ListView, Text, StyleSheet, StatusBar} from 'react-native';

const thumbUp = require('../images/ic_thumb_up/ic_thumb_up.png');
const thumbDown = require('../images/ic_thumb_down/ic_thumb_down.png');

class IdeaItem extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.getUpvotesCount = this.getUpvotesCount.bind(this);
        this.getDownvotesCount = this.getDownvotesCount.bind(this);
        this.isUpvoted = this.isUpvoted.bind(this);
        this.isDownvoted = this.isDownvoted.bind(this);

        this.onDownvote = this.onDownvote.bind(this);
        this.onUpvote = this.onUpvote.bind(this);

    }

    getUpvotesCount() {
        return this.props.idea.upvotes ? Object.keys(this.props.idea.upvotes).length : 0;
    }

    getDownvotesCount() {
        return this.props.idea.downvotes ? Object.keys(this.props.idea.downvotes).length : 0;
    }


    isUpvoted() {
        return this.props.idea.upvotes && this.props.idea.upvotes[this.props.user.uid];
    }

    isDownvoted() {
        return this.props.idea.downvotes && this.props.idea.downvotes[this.props.user.uid];
    }

    onDownvote() {
        console.log('Downvoting idea: ' + this.props.idea.title + ' with id ' + this.props.idea.id);
        this.props.onDownvote(this.props.idea);
    }

    onUpvote() {
        console.log('Upvoting idea: ' + this.props.idea.title + ' with id ' + this.props.idea.id);
        this.props.onUpvote(this.props.idea);
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    height: 72,
                    backgroundColor: '#ffffff',
                    alignItems: 'stretch',
                    justifyContent: 'center'
                }}>
                <TouchableOpacity>
                    <Text style={styles.itemtext}>{this.props.idea.title}</Text>
                </TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity onPress={this.onUpvote}>
                        <Image style={this.isUpvoted() ? styles.actionIconSelected : styles.actionIcon} source={thumbUp}
                               onPress={this.onUpvote}/>
                    </TouchableOpacity>
                    <Text style={styles.smallText}>{this.getUpvotesCount()}</Text>
                    <TouchableOpacity onPress={this.onDownvote}>
                        <Image style={this.isDownvoted() ? styles.actionIconSelected : styles.actionIcon}
                               source={thumbDown}/>
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
    onDownvote: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    itemtext: {
        marginTop: 12,
        fontSize: 20,
        textAlign: 'center'
    },
    actionIcon: {
        margin: 4,
        opacity: 0.2
    },
    actionIconSelected: {
        margin: 4,
        opacity: 1
    },
    smallText: {
        margin: 4
    }
});

export default IdeaItem;

