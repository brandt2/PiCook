const Validator = require('validator');
const validText = require('./valid-text');

modele.exports = function validateNewRecipeInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is empty";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};