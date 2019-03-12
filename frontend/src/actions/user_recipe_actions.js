import * as UserRecipeApiUtil from '../util/user_recipe_api_util';

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_USER_RECIPE = "RECEIVE_USER_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

export const receiveAllRecipes = recipes => ({
  type: RECEIVE_ALL_RECIPES,
  recipes
});

export const receiveUserRecipe = recipe => ({
  type: RECEIVE_USER_RECIPE,
  recipe
});

export const removeRecipe = id => ({
  type: REMOVE_RECIPE,
  recipeId: id
});



export const fetchAllRecipes = () => dispatch => (
  UserRecipeApiUtil.fetchAllRecipes()
    .then(res => dispatch(receiveAllRecipes(res.data)))
    .catch(err => console.log(err))
);

export const fetchRecipe = (id) => dispatch => (
  UserRecipeApiUtil.fetchRecipe(id)
    .then(res => dispatch(receiveUserRecipe(res.data)))
    .catch(err => console.log(err))
);

export const createRecipe = (data) => dispatch => (
  UserRecipeApiUtil.createRecipe(data)
    .then(res => dispatch(receiveUserRecipe(res.data)))
    .catch(err => console.log(err))
);

export const updateRecipe = (data) => dispatch => (
  UserRecipeApiUtil.updateRecipe(data)
    .then(res => dispatch(receiveUserRecipe(res.data)))
    .catch(err => console.log(err))
);

export const deleteRecipe = (id) => dispatch => (
  UserRecipeApiUtil.deleteRecipe(id)
    .then(res => dispatch(removeRecipe(res.data)))
    .catch(err => console.log(err))
);

