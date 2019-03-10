const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRecipeInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.instructions = validText(data.instructions) ? data.instructions : "";
  data.ingredients = validText(data.ingredients) ? data.ingredients : "";

  
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is empty";
  }
  
  if (Validator.isEmpty(data.instructions)) {
    errors.instructions = "Instructions field is empty";
  }
  
  if (Validator.isEmpty(data.ingredients)) {
    errors.ingredients = "Ingredients field is empty";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};