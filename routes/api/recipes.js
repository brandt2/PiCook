const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');

const Recipe = require('../../models/Recipe');
const validateRecipeInput =  require('../../validation/recipe');

// INDEX all recipes
router.get("/", (req, res) => {
    Recipe.find()
      .sort({date: -1})
      .then(recipe => res.json(recipe))
      .catch(err => res.status(404).json({norecipesfound: "No recipes found"}));
  }
);

// SHOW one recipe
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
    // Recipe.findById({_id: req.params.id})
    // Recipe.findOne({"_id$oid": req.params.id})
      .then(recipe => res.json(recipe))
      .catch(err => 
        res.status(404).json({norecipefound: "No recipe found with that ID"}));
  }
);

// UPDATE a recipe
router.patch('/:id', (req, res) => {
    const { errors, isValid } = validateRecipeInput(req.body);

    Recipe.findById(req.params.id, (err, recipe) => {
      if (!recipe) {      // can't find recipe with :id
        res.status(404).json({norecipefound: "No recipe found with that ID"});
      } else {            // can find recipe with :id
        if (!isValid) {   // RecipeInput not valid  @@@  or catch the errors? line 50
          return res.status(400).json(errors);
        } else {          // RecipeInput valid
          recipe.user = req.body.user;
          recipe.title = req.body.title;
          recipe.price = req.body.price;
          recipe.instructions = req.body.instructions;
          recipe.ingredients = req.body.ingredients;
          recipe.note = req.body.note;
          recipe.date = req.body.date;

          recipe.save().then(recipe => res.json(recipe));
        }
      }
     });
  }
);

// CREATE new recipe
router.post("/", (req, res) => {
    const { errors, isValid } = validateRecipeInput(req.body);

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

// DELETE a recipe
router.delete('/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
      if (err) {
        res.json(err);
      } else {
        res.json("Recipe has been successfully removed");
      }
    });
  }
);



module.exports = router;