import * as RecipeAPIs from '../util/recipe_api_util';

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
})

// export const receivePuppyRecipes = puppyRecipes => ({
//   type: RECEIVE_PUPPY_RECIPES,
//   puppyRecipes
// })

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

export const getRecipesByDishName = food => dispatch => {
  return RecipeAPIs.fetchRecipesByDishName(food).then(res => {
    if (res === null) {
      console.log(`Sorry, no results for ${food}. Please try another term.`)
    } else { 
      debugger
      return dispatch(receiveRecipes(res))
    }
  })
}

export const getRecipesByIngredient = ingredient => dispatch => {
  return RecipeAPIs.fetchRecipesByIngredient(ingredient).then(res => {
    if (res === null) {
      console.log(`Sorry, no results for ${ingredient}. Please try another term.`)
    } else {
      return (res => dispatch(receiveRecipes(res)))
    }
  })
}

export const getRecipesByCategory = category => dispatch => {
  return RecipeAPIs.fetchRecipesByCat(category).then(res => {
    if (res === null) {
      console.log(`Sorry, no results for ${category}. Please try another term.`)
    } else {
      return (res => dispatch(receiveRecipes(res)))
    }
  })
}

// export const getRecipeById = id => dispatch => {
//   return RecipeAPIs.fetchRecipeById(id).then(res => {
//     if (res === null) {
//       console.log(`Sorry, no results for ${food}. Please try another term.`)
//     } else {
//       return (res => dispatch(receiveRecipe(res)))
//     }
//   })
// }