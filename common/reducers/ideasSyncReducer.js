import * as types from './../actions/actionTypes';
import initialState from './../store/initialState';

export default function ideasLoadingStateReducer(state = initialState.ideasSyncCompleted, action) {
    switch (action.type) {
        case types.IDEAS_SYNC_STARTED: {
            return false;
        }
        case types.IDEAS_SYNC_COMPLETED: {
            return true;
        }
        default: {
            return state;
        }
    }
}
