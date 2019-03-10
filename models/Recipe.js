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
  note: {
    type: String
  }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);