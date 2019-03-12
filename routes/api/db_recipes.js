const express = require("express");
const router = express.Router();
const axios = require('axios');
const request = require('request');

router.get("/:food",
  (req, res) => {
    const food = req.params.food;
    return getRecipeByFood(food).then(response => {
      if (response.meals === null) {
        return getRecipeByIngredient(food).then(response => {
          if (response.meals === null) {
            return getRecipeByCategory(food).then(response => {
              if (response.meals === null) {
                console.log("============HIT A DOG=============")
                // return byCategory
              } else {
                return res.json(response)
              }
            })
          } else {
            return res.json(response)
          }
          // return byIngredient
        })
        // return byFood
      } else {
        return res.json(response)
      }
    })
  }
)

router.get("/food/:id",
  (req, res) => {
    const id = req.params.id;
    return getRecipeById(id).then(response => {
      return res.json(response)
    })
  }
)

router.get("/cuisines/",
  (req, res) => {
    const id = req.params.id;
    return getRecipeById(id).then(response => {
      return res.json(response)
    })
  }
)

function getRecipeByFood(food) {
  return new Promise((resolve, reject) => request(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`, (error, res, body) => {
    console.log(res);
    resolve(JSON.parse(body));
  }))
}

function getRecipeById(id) {
  return new Promise((resolve, reject) => request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, (error, res, body) => {
    console.log(res);
    resolve(JSON.parse(body));
  }))
}

function getRecipeByCategory(cat) {
  return new Promise((resolve, reject) => request(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`, (error, res, body) => {
    console.log(res);
    resolve(JSON.parse(body));
  }))
}

function getRecipeByIngredient(food) {
  return new Promise((resolve, reject) => request(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`, (error, res, body) => {
    console.log(res);
    resolve(JSON.parse(body));
  }))
}



module.exports = router;

