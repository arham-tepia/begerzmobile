import {combineReducers} from 'redux';
import Current from './currentUserReducer';
import setDraftedBegReducer from './draftedBegreducer';
import rememberMereducer from './rememberMeReducer';

export const allReducers = combineReducers({
  currentUser: Current,
  rememberMe: rememberMereducer,
  draftedBeg: setDraftedBegReducer
});
