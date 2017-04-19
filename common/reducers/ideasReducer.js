import * as types from './../actions/actionTypes';
import initialState from './../store/initialState';

export default function ideasReducer(state = initialState.ideas, action) {
    switch (action.type) {
        case types.LOAD_IDEAS_SUCCESS: {
            return Object.keys(action.ideas)
                .map(key => Object.assign(action.ideas[key], {id: key}));
        }
        case types.ADD_IDEA_SUCCESS: {
            return [...state, action.idea];
        }
        case types.UPVOTE_IDEA_SUCCESS:
        case types.DOWNVOTE_IDEA_SUCCESS: {
            return [...state.filter((idea) => idea.id !== action.idea.id), action.idea];
        }
        default: {
            return state;
        }
    }
}
