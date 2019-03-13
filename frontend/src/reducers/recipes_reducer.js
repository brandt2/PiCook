import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE,
  RECEIVE_CATEGORIES
} from '../actions/recipe_actions';

const recipesSelector = (arr) => {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].idMeal] = arr[i]
  }
  return result;
}

const categoriesSelector = (arr) => {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].idCategory] = arr[i]
  }
  return result;
}

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_RECIPES:
      if (action.payload.meals === null) return state;
      return recipesSelector(action.payload.meals);
    case RECEIVE_RECIPE:
      return Object.assign(newState, {[action.payload.idMeal]: action.payload});
    case RECEIVE_CATEGORIES:
      return action.payload.categories;
    default:
      return state;
  }
};


export default RecipesReducer;