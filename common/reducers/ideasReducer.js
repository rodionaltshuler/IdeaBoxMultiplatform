import * as types from './../actions/actionTypes';
import initialState from './../store/initialState';

export default function ideasReducer(state = initialState.ideas, action) {
    switch (action.type) {
        case types.LOAD_IDEAS_SUCCESS: {
            const ideasJson = action.ideas.toJSON();
            return Object.keys(ideasJson)
                .map(key =>  Object.assign(ideasJson[key], {id: key}));
        }
        case types.ADD_IDEA_SUCCESS: {
            return [...state, action.idea];
        }
        default: {
            return state;
        }
    }
}
