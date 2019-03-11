import * as RecipeApiUtil from '../util/recipe_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_PUPPY_RECIPES = "RECEIVE_PUPPY_RECIPES";

export const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
})

export const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
})

export const receivePuppyRecipes = puppyRecipes => ({
  type: RECEIVE_PUPPY_RECIPES,
  puppyRecipes
})


// export const getRecipesByDishName = food => dispatch => {
//   return RecipeApiUtil.fetchRecipesByDishName(food).then(res => {
//     if (res === null) {
//       return RecipeApiUtil.fetchRecipesByIngredient(food).then(res => {
//         if (res === null) {
//           return RecipeApiUtil.fetchRecipesByCat(food).then(res => {
//             if (res === null) {
//               return RecipeApiUtil.fetchRecipesFromPuppy(food)
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

export const getRecipesByDishName = food => dispatch => {
  return RecipeApiUtil.fetchRecipesByDishName(food).then(res => {
    if (res === null) {
      console.log(`Sorry, no results for ${food}. Please try another term.`)
    } else { 
      debugger
      return dispatch(receiveRecipes(res))
    }
  })
}

export const getRecipesByIngredient = ingredient => dispatch => {
  return RecipeApiUtil.fetchRecipesByIngredient(ingredient).then(res => {
    if (res === null) {

    } else {
      return (res => dispatch(receiveRecipes(res)))
    }
  })
}

