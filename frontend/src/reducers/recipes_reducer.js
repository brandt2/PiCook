import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE,
  REMOVE_RECIPE
} from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_RECIPES:
      return action.recipes;
    case RECEIVE_RECIPE:
      newState[action.recipe.id] = action.recipe;
      return newState;
    case REMOVE_RECIPE:
      delete newState[action.recipeId];
      return newState;
    default:
      return state;
  }
};

export default RecipesReducer;