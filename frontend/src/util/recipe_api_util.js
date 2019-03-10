import axios from 'axios';

export const fetchRecipesByDishName = dishName => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
}

export const fetchRecipesByIngredient = ingredient => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
}

export const fetchRecipeById = id => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
}