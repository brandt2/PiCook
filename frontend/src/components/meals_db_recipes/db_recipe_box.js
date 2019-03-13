import React from 'react';
import DBIngredients from './db_ingredients';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon.js';
import "./db_recipe_box.css";

class DBRecipeBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.getRecipeById(this.props.match.params.idMeal)
  }

  componentDidUpdate({ loading }) {
    if (this.props.loading !== this.state.loading) {
      this.setState({ loading: this.props.loading })
    }
  }

  render() {

    if (this.state.loading === true) {
      return (
        <LoadingIcon />
      )
    }

    const recipe = this.props.recipe;
    if (recipe === undefined || recipe.strInstructions === undefined) return null;
    const instructions = (
      JSON.stringify(recipe.strInstructions)
        .split('\\r\\n').map((paragraph, i) => {
          if (paragraph !== "") {
            return <li key={i}>{paragraph}</li>
          } else return null;
        }
      )
    )

    const ingredients = Object.keys(DBIngredients(recipe)).map((ing, i) => (
      <div key={i}>{ing}</div>
    ))

    const measures = Object.values(DBIngredients(recipe)).map((mea, i) => (
      <div key={i}>{mea}</div>
    ))
    
    return (
      <div className="outer-div">
        <div className="some-div">
          <div className="recipe-image-div">
            <div className="recipe-image">
              <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
            </div>
          </div>

          <div className="recipe-info">
            <div className="recipe-title-div">
              <h3 className="recipe-title">{recipe.strMeal}</h3>
              <div>   
                <Link className="save-recipe-button" to={{
                  pathname: `/recipes/new/${recipe.idMeal}`
                }}>Save this recipe</Link>
              </div>
            </div>
            <div className="recipe-instruction-div">
              <div className="instructions-div">
                <h2 className="instructions-title">Instructions</h2>
                <ol>
                  {instructions}
                </ol>
              </div>
              <div className="ingredients-section">
                <h2 className="instructions-title">Ingredients</h2>
                <table>
                  <tr>
                    <th>Ingredients</th>
                    <th>Measurements</th>
                  </tr>
                  <tr>
                    <td>{ingredients}</td>
                    <td>{measures}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <h2 className="source-name">Source</h2>
              <div className="source">{recipe.strSource}</div>
            </div>
          </div>
        </div>

        {/* if logged in, render button, else render login message */}
      </div>
    )
  }
}

export default DBRecipeBox;