import {combineReducers} from 'redux';
import Current from './currentUserReducer';
import setDraftedBegReducer from './draftedBegreducer';
import addNewBegToListReducer from './newBegReducer';
import rememberMereducer from './rememberMeReducer';

export const allReducers = combineReducers({
  currentUser: Current,
  rememberMe: rememberMereducer,
  draftedBeg: setDraftedBegReducer,
  newBeg: addNewBegToListReducer
});
