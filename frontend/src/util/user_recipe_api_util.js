import axios from 'axios';


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
