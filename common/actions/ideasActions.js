import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import ideasApi from './../api/ideasApi';

export function loadIdeas() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ideasApi.getAllIdeas()
            .then(res => {
                console.log("dispatching response: " + res);
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

export function submitIdea(idea) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return ideasApi.submitIdea(idea)
            .then(res => {
                dispatch(submitIdeaSuccess(idea));
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




