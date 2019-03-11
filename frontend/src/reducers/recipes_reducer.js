import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE,
  // RECEIVE_PUPPY_RECIPES
} from '../actions/recipe_actions';

const RecipesReducer = (state = [], action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_RECIPES:
      return Object.assign(newState, action.payload.meals);
    case RECEIVE_RECIPE:
      return Object.assign(newState, action.recipe);
    // case RECEIVE_PUPPY_RECIPES:
    //   return Object.assign(newState, action.puppyRecipes)
    default:
      return state;
  }
};

export default RecipesReducer;