import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as ideasActions from '../common/actions/ideasActions';


class IdeasPage extends React.Component {

    constructor(props, context) {
       super(props, context);
    }




}

IdeasPage.propTypes = {
    //TODO
    ideas: React.PropTypes.array.isRequired
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

