import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import ideasApi from './../api/ideasApi';

export function subscribeForIdeasUpdates() {
    return function(dispatch) {
        const updateListener = function (updateType, updateSnapshot) {
            console.log('Dispatching update data: ' + JSON.stringify(updateType));
            console.log('And a snapshot: ' + JSON.stringify(updateSnapshot));
            dispatch({type: updateType.action, idea: updateSnapshot});
        };
        ideasApi.subscribeForIdeasUpdate(updateListener);
    }
}

export function unsubscribeFromIdeasUpdates() {
    return function(dispatch) {
        ideasApi.unsubscribeFromIdeasUpdates();
    }
}


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
            .then(submittedIdea => {
                dispatch(submitIdeaSuccess(submittedIdea));
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

export function upvoteIdea(idea, userUid) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ideasApi.upvote(idea, userUid)
            .then(response => {
                dispatch(upvoteIdeaSuccess(response))
            })
            .catch(error => {
                dispatch(ajaxCallError());
            });
    };
}

export function upvoteIdeaSuccess(idea) {
    return {
        type: types.UPVOTE_IDEA_SUCCESS,
        idea
    }
}

export function downvoteIdea(idea, userUid) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ideasApi.downvote(idea, userUid)
            .then(response => {
                dispatch(downvoteIdeaSuccess(response))
            })
            .catch(error => {
                dispatch(ajaxCallError());
            });
    };
}


export function downvoteIdeaSuccess(idea) {
    return {
        type: types.DOWNVOTE_IDEA_SUCCESS,
        idea
    }
}




