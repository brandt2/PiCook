import * as RecipeAPIs from '../util/recipe_api_util';
// import { debug } from 'util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const REMOVE_RECIPE = "REMOVE_RECIPE";


export const receiveRecipes = payload => ({
  type: RECEIVE_RECIPES,
  payload
});

export const receiveRecipe = payload => ({
  type: RECEIVE_RECIPE,
  payload: payload.meals[0]
})

export const receiveCategories = payload => ({
  type: RECEIVE_CATEGORIES,
  payload
})

// export const receivePuppyRecipes = puppyRecipes => ({
//   type: RECEIVE_PUPPY_RECIPES,
//   puppyRecipes
// })

export const getRecipesByDishName = food => dispatch => {
  return RecipeAPIs.fetchRecipesByDishName(food)
    .then(res => {
      return dispatch(receiveRecipes(res.data))
    })
}

export const getRecipeById = id => dispatch => (
  RecipeAPIs.fetchRecipeById(id)
    .then(res => {
      dispatch(receiveRecipe(res.data))
    }
  )
)

export const getRecipesByIngredient = food => dispatch => (
  RecipeAPIs.fetchRecipesByIngredient(food)
    .then(res => (dispatch(receiveRecipes(res.data)))
  )
)

export const getAllCategories = () => dispatch => (
  RecipeAPIs.fetchAllCategories()
    .then(res => (dispatch(receiveCategories(res.data)))
  )
)

export const getRecipesByCategory = category => dispatch => (
  RecipeAPIs.fetchRecipesByCategory(category)
    .then(res => (dispatch(receiveRecipes(res.data)))
    )
)

