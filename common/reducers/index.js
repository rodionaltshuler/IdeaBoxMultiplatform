import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import ideasReducer from './ideasReducer';
import userReducer from './userReducer';

//of use non-plain JS object as state, Immutable.JS read this-> http://redux.js.org/docs/recipes/reducers/BeyondCombineReducers.html
const rootReducer = combineReducers({
  user: userReducer,
  ideas: ideasReducer,
  ajaxCallsInProgress
});

export default rootReducer;
