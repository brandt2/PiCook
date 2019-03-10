const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
// const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');
// const passport = require('passport');

const validateNewRecipeInput =  require('../../validation/new-recipe');


router.get("/test", (req, res) => res.json({ msg: "This is the recipes route" }));

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