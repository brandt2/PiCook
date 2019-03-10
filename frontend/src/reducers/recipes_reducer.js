import {
  RECEIVE_RECIPES
} from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_RECIPES:
      // return Object.values(action.recipes);
      return action.recipes;
    default:
      return state;
  }
}

export default RecipesReducer;