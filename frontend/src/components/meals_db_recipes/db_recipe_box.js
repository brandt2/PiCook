import React from 'react';
import DBIngredients from './db_ingredients';
import "./db_recipe_box.css"

class DBRecipeBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipeById(this.props.match.params.idMeal)
  }

  render() {
    const recipe = this.props.recipe;
    if (recipe === undefined) return null;
    const instructions = (
      JSON.stringify(recipe.strInstructions)
        .split('\\r\\n').map((paragraph, i) => (
          <li key={i}>{paragraph}</li>
        )
      )
    )

    const ingredients = Object.keys(DBIngredients(recipe)).map((ing, i) => (
      <li key={i}>{ing}</li>
    ))

    const measures = Object.values(DBIngredients(recipe)).map((mea, i) => (
      <li key={i}>{mea}</li>
    ))
    
    return (
      <div className="outer-div">
        <div>
          <div className="recipe-image-div">
            <div className="recipe-image">
              <img src={recipe.strMealThumb}></img>
            </div>
          </div>
          <div className="recipe-title">
            <h3>{recipe.strMeal}</h3>
          </div>
          <ol>
            {instructions}
          </ol>
          <div>
            {ingredients}
          </div>
          <div>
            {measures}
          </div>
          <div>
            {recipe.strSource}
          </div>
        </div>
      </div>
    )
  }
}

export default DBRecipeBox;