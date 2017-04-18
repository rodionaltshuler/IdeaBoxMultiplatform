import * as types from './../actions/actionTypes';
import initialState from './../store/initialState';
import requestStatus from './../actions/requestStatus';

export default function ideasReducer(state = initialState.submitIdeaStatus, action) {
    switch (action.type) {
        case types.ADD_IDEA_SUCCESS: {
            return { status: requestStatus.COMPLETED, idea: action.idea}
        }
        case types.ADD_IDEA_FAILED: {
            return { status: requestStatus.FAILED, message: action.message}
        }
        case types.ADD_IDEA_IN_PROGRESS: {
            return { status: requestStatus.IN_PROGRESS };
        }
        case types.ADD_IDEA_CONSUME_STATUS: {
            return {};
        }
        default: {
            return state;
        }
    }
}
