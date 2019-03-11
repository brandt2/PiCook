import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_USER_RECIPE,
  REMOVE_RECIPE
} from '../actions/user_recipe_actions';

import merge from 'lodash/merge';

const UserRecipesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let state;
  switch(action.type) {
    case RECEIVE_ALL_RECIPES:
      return action.recipes;
    case RECEIVE_USER_RECIPE:
      state = merge({}, oldState, {[action.recipe._id]: action.recipe});
      return state;
    case REMOVE_RECIPE:
      state = merge({}, oldState);
      delete state[action.recipeId];
      return state;
    default:
      return oldState;
  }
};

export default UserRecipesReducer;