import axios from 'axios';

export const fetchRecipesByDishName = food => (
  // return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
  axios({
    method: 'get',
    url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`,
  })
  // .then(res => res.data.meals)
)

export const fetchRecipesByIngredient = ingredient => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.data.meals)
}

export const fetchRecipeById = id => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.data.meals[0])
}

export const fetchRecipesByCat = cat => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    .then(res => res.data.meals)
}

// export const fetchRecipesFromPuppy = food => {
//   return axios.get(`http://www.recipepuppy.com/api/?q=${food}`)
//     .then(res => res.results)
// }

// export const request = require('request');
// request('http://www.recipepuppy.com', (error, res) => {
//   console.log('error: ', error);
//   console.log('response: ', res)
// })
