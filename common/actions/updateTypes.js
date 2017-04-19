import * as actionTypes from './actionTypes';

const types = {
    ADDED: {name: 'child_added', action: actionTypes.IDEA_ADDED_ON_SERVER },
    UPDATED: {name: 'child_changed', action: actionTypes.IDEA_UPDATED_ON_SERVER},
    REMOVED: {name: 'child_removed', action: actionTypes.IDEA_REMOVED_ON_SERVER}
};

export default types;