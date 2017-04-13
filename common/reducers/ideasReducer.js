import * as types from './../actions/actionTypes';
import initialState from './../store/initialState';

export default function ideasReducer(state = initialState.ideas, action) {
    switch (action.type) {
        case types.LOAD_IDEAS_SUCCESS: {
            //TODO
            return Object.assign([], action.ideas);
        }
        case types.ADD_IDEA_SUCCESS: {
            //TODO
            return state;
        }
        default: {
            return state;
        }
    }
}
