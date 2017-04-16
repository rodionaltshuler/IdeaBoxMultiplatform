import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import ideasApi from './../api/ideasApi';

export function loadIdeas() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ideasApi.getAllIdeas()
            .then(res => {
                dispatch(loadIdeasSuccess(res));
            })
            .catch(error => {
                dispatch(ajaxCallError());
            });
    };
}

export function loadIdeasSuccess(ideas) {
    return {
        type: types.LOAD_IDEAS_SUCCESS,
        ideas
    }
}

export function submitIdea(idea, userUid) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return ideasApi.submitIdea(idea, userUid)
            .then(res => {
                dispatch(submitIdeaSuccess(res));
            })
            .catch(error => {
                dispatch(ajaxCallError());
            });
    };
}

export function submitIdeaSuccess(idea) {
    return {
        type: types.ADD_IDEA_SUCCESS,
        idea
    }
}




