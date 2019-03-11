import React from 'react';
import DBRecipeBox from './db_recipe_box';
import { Link, withRouter } from 'react-router-dom';

class DBRecipesByName extends React.Component {
  constructor(props) {
    super(props);

    this.keyword = "chicken"
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
          <Link className="each-recipe" to={`/dbmeals/${recipe.idMeal}`} key={recipe.idMeal}>
            {recipe.strMeal}
          </Link>
        )
      )
      return (
        <div className="yes-index-recipes">
          <h2>Recipes Found</h2>
          {recipeLink}
        </div>
      )
    }
  }
}

export default withRouter(DBRecipesByName)