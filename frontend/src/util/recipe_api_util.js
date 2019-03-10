import axios from 'axios';

export const fetchRecipesByDishName = dishName => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
};

export const fetchRecipesByIngredient = ingredient => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
};

export const fetchRecipeById = id => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
};

export const fetchAllRecipes = () => {
  return axios.get('/api/recipes')
};

export const fetchRecipe = id => {
  return axios.get(`/api/recipes/${id}`)
};

export const createRecipe = data => {
  return axios.post(`/api/recipes/`, data)
};

export const updateRecipe = data => {
  return axios.patch(`/api/recipes/${data.id}`, data)
};

export const deleteRecipe = id => {
  return axios.delete(`/api/recipes/${id}`)
};
