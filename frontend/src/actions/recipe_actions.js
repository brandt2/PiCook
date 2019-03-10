import { 
  fetchRecipesByDishName,
  fetchRecipeById,
  fetchRecipesByIngredient
} from '../util/recipe_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

export const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
})

export const getRecipesByDishName = dishName => (
  fetchRecipesByDishName(dishName)
    .then(recipes => dispatchEvent(receiveRecipes(recipes.data.meals)))
    .catch(err => console.log(err))
);



