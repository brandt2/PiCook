// import { 
//   fetchRecipesByDishName,
//   fetchRecipeById,
//   fetchRecipesByIngredient,
//   fetchAllRecipes,
//   fetchRecipe,
//   createRecipe,
//   updateRecipe,
//   deleteRecipe
// } from '../util/recipe_api_util';
import * as RecipeApiUtil from '../util/recipe_api_util';

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


export const getRecipesByDishName = dishName => (
  RecipeApiUtil.fetchRecipesByDishName(dishName)
    .then(recipes => dispatchEvent(receiveRecipes(recipes.data.meals)))
    .catch(err => console.log(err))
);

export const fetchAllRecipes = () => dispatch => (
  RecipeApiUtil.fetchAllRecipes()
    .then(recipes => dispatch(receiveRecipes(recipes)))
    .catch(err => console.log(err))
);

export const fetchRecipe = (id) => dispatch => (
  RecipeApiUtil.fetchRecipe(id)
    .then(recipe => dispatch(receiveRecipe(recipe)))
    .catch(err => console.log(err))
);

export const createRecipe = (data) => dispatch => (
  RecipeApiUtil.createRecipe(data)
    .then(recipe => dispatch(receiveRecipe(recipe)))
    .catch(err => console.log(err))
);

export const updateRecipe = (data) => dispatch => (
  RecipeApiUtil.updateRecipe(data)
    .then(recipe => dispatch(receiveRecipe(recipe)))
    .catch(err => console.log(err))
);

export const deleteRecipe = (id) => dispatch => (
  RecipeApiUtil.deleteRecipe(id)
    .then(recipe => dispatch(removeRecipe(recipe)))
    .catch(err => console.log(err))
);

