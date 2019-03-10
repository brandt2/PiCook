const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');

const Recipe = require('../../models/Recipe');
const validateNewRecipeInput =  require('../../validation/new-recipe');

// INDEX all recipes
// route '/recipe' ???
router.get("/", 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    Recipe.find()
      .sort({date: -1})
      .then(recipe => res.json(recipe))
      .catch(err => res.status(404).json({norecipesfound: "No recipes found"}));
  }
);

// SHOW one recipe
// route '/recipe/:id' ???
router.get('/:id', 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    Recipe.findById(req.params.id)
      .then(recipe => res.json(recipe))
      .catch(err => 
        res.status(404).json({norecipefound: "No recipe found with that ID"}));
  }
);


// CREATE new recipe
// route '/recipe/new' ???
router.post("/", 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const { errors, isValid } = validateNewRecipeInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }

    const newRecipe = new Recipe({
      user: req.body.user,
      title: req.body.title,
      price: req.body.price,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      note: req.body.note,
      date: req.body.date
    });
    newRecipe.save().then(recipe => res.json(recipe));
  }
);



module.exports = router;