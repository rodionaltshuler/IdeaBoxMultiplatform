import * as types from './../actions/actionTypes';

export default function ideasReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_IDEAS_SUCCESS: {
            //TODO
            return state;
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
