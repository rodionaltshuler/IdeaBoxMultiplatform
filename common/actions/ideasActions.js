import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadIdeas() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //TODO load from server
        const ideas = ['First idea', 'Second idea', 'And one more idea'];
        dispatch(loadIdeasSuccess(ideas));
    };
}

export function loadIdeasSuccess(ideas) {
    return {
        type: types.LOAD_IDEAS_SUCCESS,
        ideas
    }
}


