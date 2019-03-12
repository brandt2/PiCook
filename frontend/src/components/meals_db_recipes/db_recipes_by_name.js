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

    this.keyword = "Chicken"
  }
  componentDidMount() {
    this.props.getRecipesByDishName(this.keyword)
    // this.setState(this.props.getRecipesByDishName(this.keyword))
  }
  render() {
    // get search keyword from props from alec
    if (this.props.recipes.length === 0) {
      return (
        <div>Sorry, no recipes for {`${this.keyword}`}</div>
      )
    } else {
      const recipeLink = this.props.recipes.map((recipe, index) =>
        (
          <div className="recipe-index-div">
            <h1 className="recipe-index-title">{recipe.strMeal}</h1>
            <Link to={`/dbmeals/${recipe.idMeal}`} key={recipe.idMeal}>
              <img className="each-recipe" src={recipe.strMealThumb}/>
              {/* {recipe.strMeal} */}
            </Link>
          </div>
        )
      )
      return (
        <div className="yes-index-recipes">
          <div>
            <h2>Found Recipes</h2>
          </div>
          <div className="index-recipes">
            {recipeLink}
          </div>
        </div>
      )
    }
  }
}

export default withRouter(DBRecipesByName)