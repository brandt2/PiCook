import { combineReducers } from 'redux';
import recipes from './recipes_reducer';

const RootReducer = combineReducers({
  recipes,
})

export default RootReducer;