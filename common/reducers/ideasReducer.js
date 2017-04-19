import * as types from './../actions/actionTypes';
import initialState from './../store/initialState';

export default function ideasReducer(state = initialState.ideas, action) {
    switch (action.type) {
        case types.IDEA_ADDED_ON_SERVER: {
            return [...state, action.idea];
        }
        case types.IDEA_UPDATED_ON_SERVER: {
            return [...state.filter((idea) => idea.id !== action.idea.id), action.idea];
        }
        case types.IDEA_REMOVED_ON_SERVER: {
            return state.filter((idea) => idea.id !== action.idea.id);
        }
        default: {
            return state;
        }
    }
}
