import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as ideasActions from '../common/actions/ideasActions';
import IdeasList from './../common_native_components/IdeasList'

class IdeasPage extends React.Component {

    static navigationOptions = {
        title: 'Lohika Idea Box',
        headerStyle: {backgroundColor: '#4fcb54'},
        headerTintColor: 'white',
    };

    constructor(props, context) {
        super(props, context);
        this.navigateToAddIdea = this.navigateToAddIdea.bind(this);
        this.onUpvote = this.onUpvote.bind(this);
        this.onDownvote = this.onDownvote.bind(this);
        this.state = {isLoading: false, ideasSyncCompleted: false};
    }

    navigateToAddIdea() {
        this.props.navigation.navigate('AddIdea');
    }

    onUpvote(idea) {
        this.props.actions.upvoteIdea(idea, this.props.user.uid);
    }

    onDownvote(idea) {
        this.props.actions.downvoteIdea(idea, this.props.user.uid);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isLoading: nextProps.loading, ideasSyncCompleted: nextProps.ideasSyncCompleted});
    }

    componentWillMount() {
        console.log('Subscribing for realtime ideas updates');
        this.props.actions.subscribeForIdeasUpdates();
    }

    componentWillUnmount() {
        console.log('Unsubscribing from realtime ideas updates');
        this.props.actions.unsubscribeFromIdeasUpdates();
    }

    render() {
        return <IdeasList
                ideas={[...this.props.ideas]}
                user={this.props.user}
                loading={this.state.isLoading || !this.state.ideasSyncCompleted}
                onAdd={this.navigateToAddIdea}
                onUpvote={this.onUpvote}
                onDownvote={this.onDownvote}
            />
    }


}

IdeasPage.propTypes = {
    ideas: React.PropTypes.arrayOf(React.PropTypes.object),
    loading: React.PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    return {
        ideas: state.ideas,
        user: state.user,
        loading: state.ajaxCallsInProgress > 0,
        ideasSyncCompleted: state.ideasSyncCompleted
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ideasActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeasPage);

