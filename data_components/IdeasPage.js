import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as ideasActions from '../common/actions/ideasActions';

class IdeasPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.navigateToAddIdea = this.navigateToAddIdea.bind(this);
    }

    navigateToAddIdea() {
         console.log('Adding an idea');
    }

    componentDidMount() {
        this.props.actions.loadIdeas();
    }

    render() {
        console.log(this.props.children.length);
        if (this.props.children.length > 1) {
            throw new Error('IdeasPage can have no more than 1 child');
        }
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                ideas: this.props.ideas,
                onAdd: this.navigateToAddIdea
            })
        );
        return childrenWithProps[0];
    }


}

IdeasPage.propTypes = {
    ideas: React.PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        ideas: state.ideas,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ideasActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeasPage);

