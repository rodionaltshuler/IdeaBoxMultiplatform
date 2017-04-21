import React from "react";
import {
    View,
    ListView,
    RefreshControl,
    TouchableHighlight,
    TouchableNativeFeedback,
    Text,
    StyleSheet
} from 'react-native';
import DefaultButton from './DefaultButton';
import IdeaItem from './IdeaItem'

class IdeasList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this._onAdd = this._onAdd.bind(this);
        this.sort = this.sort.bind(this);
    }

    _onAdd() {
        this.props.onAdd();
    }

    sort(idea1, idea2) {
        return idea2.dateAdded - idea1.dateAdded;
    }

    render() {
        const orderedIdeas = this.props.ideas.sort((a, b) => this.sort(a, b));
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(orderedIdeas);

        const listView = <ListView
            refreshControl={<RefreshControl
                colors={['#40a544']}
                refreshing={this.props.loading || false}
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
        />;

        const emptyView = (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.emptyView}>No ideas yet - be the first to submit!</Text>
            </View>
        );
        const showEmptyView = !this.props.loading && Object.keys(orderedIdeas).length < 1;

        return (
            <View style={styles.container}>
                {showEmptyView ? emptyView : listView}
                <DefaultButton onPress={this._onAdd} title='Submit your idea'/>
            </View>
        );
    }


}

IdeasList.propTypes = {
    onAdd: React.PropTypes.func,
    ideas: React.PropTypes.arrayOf(React.PropTypes.object),
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
    loading: React.PropTypes.bool.isRequired
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
    },
    emptyView: {
        textAlign: 'center',
        fontSize: 16,
        color: "#878787"
    }
});

export default IdeasList;

