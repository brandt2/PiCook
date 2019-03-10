const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');

const Recipe = require('../../models/Recipe');
const validateNewRecipeInput =  require('../../validation/new-recipe');

// INDEX all recipes
router.get("/", (req, res) => {
  Recipe.find()
    .sort({date: -1})
    .then(recipe => res.json(recipe))
    .catch(err => res.status(404).json({norecipesfound: "No recipes found"}));
});

// SHOW one recipe
router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => 
      res.status(404).json({norecipefound: "No recipe found with that ID"}));
});


// CREATE new recipe
router.post("/recipe", (res, req) => {
  const { errors, isValid } = validateNewRecipeInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Recipe.findOne({title: req.body.title})
    .then(recipe => {
      if (recipe) {
        return res.status(400).json({title: "You have already saved a recipe with that title"})
      } else {
        const newRecipe = new Recipe({
          user: req.body.user,
          title: req.body.title,
          price: req.body.price,
          instructions: req.body.instructions,
          ingredients: req.body.ingredients,
          note: req.body.note
        })

        newRecipe.save().then(recipe => res.send(recipe)).catch(err => res.send(err));
      }
    })
});


module.exports = router;