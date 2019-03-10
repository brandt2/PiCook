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

export const getRecipesByDishName = dishName => dispatch => (
  fetchRecipesByDishName(dishName)    
    .then(recipes => dispatch(receiveRecipes(recipes)))
  //   .catch(err => console.log(err))
)


