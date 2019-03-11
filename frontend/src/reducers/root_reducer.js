import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
import session from './session_reducer';

const RootReducer = combineReducers({
  recipes,
  session
});

export default RootReducer;