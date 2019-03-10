const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
  },
  instructions: {
    type: String
  },
  ingredients: {
    type: String
  },
  note: {
    type: String
  }
});

const Recipe = mongoose.model('recipes', RecipeSchema);
module.exports = Recipe;