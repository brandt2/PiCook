import React from 'react';
import DBRecipeBox from './db_recipe_box';
import { withRouter, Link } from 'react-router-dom';
import './db_recipes_by_name.css'

class DBRecipesByName extends React.Component {
  constructor(props) {
    super(props);
    
    this.state= {
      recipes: []
    }

    // this.keyword = "pork"
  }
  componentDidMount() {
    debugger
    this.props.getRecipesByDishName(this.props.match.params.food)
  }
  render() {
    // get search keyword from props from alec
    if (this.props.recipes.length === 0) {
      return (
        <div className="title-index">
          <h2 className="found-title">Sorry, no recipes for {`${this.keyword}`}</h2>
        </div>
      )
    } else {
      const recipeLink = this.props.recipes.map((recipe, index) =>
        (
          <div className="recipe-index-div">
            <h1 className="recipe-index-title">{recipe.strMeal}</h1>
            <Link to={`/dbmeals/${recipe.idMeal}`} key={recipe.idMeal}>
              <img className="each-recipe" src={recipe.strMealThumb}/>
            </Link>
          </div>
        )
      )
      return (
        <div className="index-background">
          <div className="yes-index-recipes">
            <div className="title-index">
              <h2 className="found-title">Found Recipes</h2>
            </div>
            <div className="index-recipes">
              {recipeLink}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(DBRecipesByName)