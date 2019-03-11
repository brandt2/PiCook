import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE,
  REMOVE_RECIPE
} from '../actions/user_recipe_actions';

import merge from 'lodash/merge';

const UserRecipesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let state;
  switch(action.type) {
    case RECEIVE_RECIPES:
      return action.recipes;
    case RECEIVE_RECIPE:
      const recipe = action.recipe.data;
      // debugger
      state = merge({}, oldState, {[action.recipe._id]: action.recipe});
      // state = merge({}, oldState, {[recipe._id]: recipe});
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