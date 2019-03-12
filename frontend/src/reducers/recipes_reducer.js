import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE,
  // RECEIVE_PUPPY_RECIPES
} from '../actions/recipe_actions';

const selector = (arr) => {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].idMeal] = arr[i]
  }
  return result;
}

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_RECIPES:
      return selector(action.payload.meals);
    case RECEIVE_RECIPE:
      return Object.assign(newState, {[action.payload.idMeal]: action.payload});
    default:
      return state;
  }
};


export default RecipesReducer;