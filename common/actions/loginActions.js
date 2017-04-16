import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import loginApi from './../api/loginApi';

export function loginAnonymously() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return loginApi.loginAnonymously()
            .then(user => {
                console.log('Dispatching logged in user: ' + user.uid);
                dispatch(loginAnonymouslySuccess(user.toJSON()));
            })
            .catch(error => {
                dispatch(ajaxCallError());
            });
    };
}

export function loginAnonymouslySuccess(user) {
    return {
        type: types.LOGIN_SUCCESS,
        user
    }
}




