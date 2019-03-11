import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  recipes,
  session,
  errors
});

export default RootReducer;