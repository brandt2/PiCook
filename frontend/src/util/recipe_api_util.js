import axios from 'axios';

export const fetchRecipesByDishName = food => (
  axios({
    method: 'get',
    url: `api/db_recipes/${food}/recipes`,
  })
)

export const fetchRecipeById = id => {
  return axios.get(`api/db_recipes/food/${id}`)
}

export const fetchRecipesByIngredient = ingredient => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    // .then(res => res.data.meals)
}

export const fetchRecipesByCategory = category => {
  return axios.get(`/categories/${category}`)
}

export const fetchAllCategories = () => {
  return axios.get(`api/db_recipes/categories`)
};