import {combineReducers} from 'redux';
import Current from './currentUserReducer';
import rememberMereducer from './rememberMeReducer';

export const allReducers = combineReducers({
  currentUser: Current,
  rememberMe: rememberMereducer
});
