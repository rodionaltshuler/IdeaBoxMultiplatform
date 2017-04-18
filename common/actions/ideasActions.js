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
    return function (dispatch) {
        dispatch(beginAjaxCall());
        dispatch(submitIdeaInProgress());
        return ideasApi.submitIdea(idea, userUid)
            .then(res => {
                dispatch(submitIdeaSuccess(res));
            })
            .catch(error => {
                dispatch(submitIdeaFailed(error.message));
                dispatch(ajaxCallError());
            });
    };
}

export function submitIdeaInProgress() {
    return {
        type: types.ADD_IDEA_IN_PROGRESS
    }
}

export function submitIdeaSuccess(idea) {
    return {
        type: types.ADD_IDEA_SUCCESS,
        idea
    }
}

export function submitIdeaFailed(message) {
    return {
        type: types.ADD_IDEA_FAILED,
        message
    }
}

export function submitIdeaConsumeStatus() {
    return {
        type: types.ADD_IDEA_CONSUME_STATUS
    }
}




