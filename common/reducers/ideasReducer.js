import * as types from './../actions/actionTypes';
import initialState from './../store/initialState';

export default function ideasReducer(state = initialState.ideas, action) {
    switch (action.type) {
        case types.LOAD_IDEAS_SUCCESS: {
            return Object.keys(action.ideas)
                .map(key =>  Object.assign(action.ideas[key], {id: key}));
        }
        case types.ADD_IDEA_SUCCESS: {
            return [...state, action.idea];
        }
        default: {
            return state;
        }
    }
}
