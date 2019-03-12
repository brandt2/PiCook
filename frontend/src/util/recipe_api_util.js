import axios from 'axios';

export const fetchRecipesByDishName = food => (
  axios({
    method: 'get',
    url: `/api/db_recipes/${food}`,
  })
)

export const fetchRecipeById = id => {
  // return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  return axios.get(`api/db_recipes/food/${id}`)
}

export const fetchRecipesByIngredient = ingredient => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    // .then(res => res.data.meals)
}

export const fetchRecipesByCat = cat => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    // .then(res => res.data.meals)
};