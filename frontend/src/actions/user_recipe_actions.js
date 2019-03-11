import * as UserRecipeApiUtil from '../util/user_recipe_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

export const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
});

export const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

export const removeRecipe = recipe => ({
  type: REMOVE_RECIPE,
  recipeId: recipe.id
});



export const fetchAllRecipes = () => dispatch => (
  UserRecipeApiUtil.fetchAllRecipes()
    .then(recipes => dispatch(receiveRecipes(recipes)))
    .catch(err => console.log(err))
);

export const fetchRecipe = (id) => dispatch => (
  UserRecipeApiUtil.fetchRecipe(id)
    .then(recipe => dispatch(receiveRecipe(recipe)))
    .catch(err => console.log(err))
);

export const createRecipe = (data) => dispatch => (
  UserRecipeApiUtil.createRecipe(data)
    .then(recipe => dispatch(receiveRecipe(recipe)))
    .catch(err => console.log(err))
);

export const updateRecipe = (data) => dispatch => (
  UserRecipeApiUtil.updateRecipe(data)
    .then(recipe => dispatch(receiveRecipe(recipe)))
    .catch(err => console.log(err))
);

export const deleteRecipe = (id) => dispatch => (
  UserRecipeApiUtil.deleteRecipe(id)
    .then(recipe => dispatch(removeRecipe(recipe)))
    .catch(err => console.log(err))
);

