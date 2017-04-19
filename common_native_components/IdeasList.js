import React from "react";
import {
    View,
    ListView,
    RefreshControl,
    TouchableHighlight,
    TouchableNativeFeedback,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import DefaultButton from './DefaultButton';
import IdeaItem from './IdeaItem'

class IdeasList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this._onAdd = this._onAdd.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }

    _onAdd() {
        this.props.onAdd();
    }

    _onRefresh() {
        this.props.onRefresh();
    }

    render() {
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.ideas);
        return (
            <View style={styles.container}>
                <ListView
                    refreshControl={<RefreshControl
                        colors={['#40a544']}
                        refreshing={this.props.loading || false}
                        onRefresh={this._onRefresh}
                    />}
                    style={styles.listView}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={(idea) => <IdeaItem idea={idea}
                                                   user={this.props.user}
                                                   onDownvote={this.props.onDownvote}
                                                   onUpvote={this.props.onUpvote}
                    />}
                    renderSeparator={() => <View style={styles.separator}/>}
                />
                <DefaultButton onPress={this._onAdd} title='Submit your idea'/>
            </View>
        );
    }


}

IdeasList.propTypes = {
    onAdd: React.PropTypes.func,
    onRefresh: React.PropTypes.func,
    ideas: React.PropTypes.arrayOf(React.PropTypes.object),
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    separator: {
        backgroundColor: "#878787",
        height: 0.5,
        marginLeft: 10
    },
    button: {
        height: 50,
        justifyContent: 'center'
    },
    listView: {
        backgroundColor: '#FFFFFF'
    },
    toolbar: {
        backgroundColor: '#40a544',
        height: 56
    }
});

export default IdeasList;

