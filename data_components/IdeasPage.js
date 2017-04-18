import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as ideasActions from '../common/actions/ideasActions';
import IdeasList from './../common_native_components/IdeasList'

class IdeasPage extends React.Component {

    static navigationOptions = {
        title: 'Lohika Idea Box',
        headerStyle: { backgroundColor: '#4fcb54'},
        headerTintColor: 'white',
    };

    constructor(props, context) {
        super(props, context);
        this.navigateToAddIdea = this.navigateToAddIdea.bind(this);
        this.forceRefresh = this.forceRefresh.bind(this);
        this.state = {};
    }

    navigateToAddIdea() {
        this.props.navigation.navigate('AddIdea');
    }

    forceRefresh() {
        this.props.actions.loadIdeas();
    }

    componentDidMount() {
        this.props.actions.loadIdeas();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: nextProps.loading });
    }

    render() {
        return <IdeasList
            ideas={this.props.ideas}
            loading={this.state.isLoading}
            onAdd={this.navigateToAddIdea}
            onRefresh={this.forceRefresh}
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
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ideasActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeasPage);

