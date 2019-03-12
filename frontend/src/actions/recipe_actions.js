import * as RecipeAPIs from '../util/recipe_api_util';
import { debug } from 'util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";


export const receiveRecipes = payload => ({
  type: RECEIVE_RECIPES,
  payload
});

export const receiveRecipe = payload => ({
  type: RECEIVE_RECIPE,
  payload: payload.data.meals[0]
})

// export const receivePuppyRecipes = puppyRecipes => ({
//   type: RECEIVE_PUPPY_RECIPES,
//   puppyRecipes
// })

export const getRecipesByDishName = food => dispatch => (
  RecipeAPIs.fetchRecipesByDishName(food)
    .then(res => {
      return dispatch(receiveRecipes(res.data))
    })
  )


export const getRecipesByIngredient = food => dispatch => (
  RecipeAPIs.fetchRecipesByIngredient(food)
    .then(res => (dispatch(receiveRecipes(res)))
  )
)

export const getRecipesByCat = food => dispatch => (
  RecipeAPIs.fetchRecipesByCat(food)
    .then(res => (dispatch(receiveRecipes(res)))
  )
)

export const getRecipeById = id => dispatch => (
  RecipeAPIs.fetchRecipeById(id)
    .then(res => (dispatch(receiveRecipe(res)))
  )
)

// export const getRecipesByDishName = food => dispatch => {
//   return RecipeAPIs.fetchRecipesByDishName(food).then(res => {
//     if (res === null) {
//       return RecipeAPIs.fetchRecipesByIngredient(food).then(res => {
//         if (res === null) {
//           return RecipeAPIs.fetchRecipesByCat(food).then(res => {
//             if (res === null) {
//               return RecipeAPIs.fetchRecipesFromPuppy(food)
//                 .then(puppyRecipe => dispatch(receivePuppyRecipes(puppyRecipe)))
//               // console.log(`Sorry, no results for ${food}. Please try another term.`)
//             } else { return(res => dispatch(receiveRecipes(res))) }
//           })
//         } else { return (res => dispatch(receiveRecipes(res))) }
//       })
//     } else { 
//       // debugger
//       return (res => dispatch(receiveRecipes(res))) }
//   }).catch(err => console.log(err))
//   // .then(recipes => dispatch(receiveRecipes(recipes)))
// }
