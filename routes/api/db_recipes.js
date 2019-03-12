const express = require("express");
const router = express.Router();
const axios = require('axios');
const request = require('request');

router.get("/:food",
  (req, res) => {
    const food = req.params.food;
    return getRecipeByFood(food).then(response => {
      return res.json(response)
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

function getRecipeByFood(food) {
  return new Promise((resolve, reject) => request(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`, (error, res, body) => {
    console.log(res);
    resolve(JSON.parse(body));
    
  }))
}

function getRecipeById(id) {
  return new Promise((resolve, reject) => request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, (error, res, body) => {
    console.log(res);
    debugger
    resolve(JSON.parse(body));

  }))
}

function getRecipeByCat() {

}

function getRecipeByIngredient() {

}

module.exports = router;

