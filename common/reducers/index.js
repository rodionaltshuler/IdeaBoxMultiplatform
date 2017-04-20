import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import ideasReducer from './ideasReducer';
import userReducer from './userReducer';
import submitIdeaStatusReducer from './submitIdeaStatusReducer';
import ideasLoadingStatusReducer from './ideasSyncReducer';

//of use non-plain JS object as state, Immutable.JS read this-> http://redux.js.org/docs/recipes/reducers/BeyondCombineReducers.html
const rootReducer = combineReducers({
  user: userReducer,
  ideas: ideasReducer,
  submitIdeaStatus: submitIdeaStatusReducer,
  ideasSyncCompleted: ideasLoadingStatusReducer,
  ajaxCallsInProgress
});

export default rootReducer;
