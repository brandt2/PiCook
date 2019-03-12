import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import user_recipes from './user_recipes_reducer';
import searchBox from './search_box_reducer';
import loading from './loading_reducer';

const RootReducer = combineReducers({
  recipes,
  user_recipes,
  session,
  searchBox,
  errors,
  loading
});

export default RootReducer;