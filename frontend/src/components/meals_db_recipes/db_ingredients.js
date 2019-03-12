import React from 'react';

const DBIngredients = (props) => {
  let ingredients = {};
  for (let i = 1; i <= 20; i++) {
    let ingredient = `strIngredient${i}`;
    let measure = `strMeasure${i}`;
    // debugger
    if (
      (props[ingredient] === "" || props[ingredient] === null)
      ||
      (props[measure] === "" || props[measure] === null)
    ) {
      return ingredients;
    } else {
      ingredients[props[ingredient]] = props[measure];
    }
  }
  return ingredients;
}

export default DBIngredients;