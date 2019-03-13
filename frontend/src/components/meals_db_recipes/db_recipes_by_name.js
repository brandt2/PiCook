import React from 'react';
import DBRecipeBox from './db_recipe_box';
import { withRouter, Link } from 'react-router-dom';
import LoadingIcon from './loading_icon.js';
import './db_recipes_by_name.css';

class DBRecipesByName extends React.Component {
  constructor(props) {
    super(props);
    
    this.state= {
      recipes: [],
      loading: true
    }

    // this.keyword = "pork"
  }
  componentDidMount() {
    this.props.getRecipesByDishName(this.props.match.params.food)
  }

  componentDidUpdate({ loading }){
    if (this.props.loading !== this.state.loading) {
      this.setState( {loading: this.props.loading} )
    }
  }

  render() {
    // get search keyword from props from alec
    if (this.state.loading === true) {
      return (
        <LoadingIcon />
      )
    }

    if (this.props.recipes.length === 0) {
      return (
        <div className="title-index">
          <h2 className="found-title">Sorry, no recipes for {`${this.props.match.params.food}`}</h2>
        </div>
      )
    } else {
      const recipeLink = this.props.recipes.map((recipe, index) =>
        (
          <div className="recipe-index-div">
            <h1 className="recipe-index-title">{recipe.strMeal}</h1>
            <Link to={`/dbmeals/food/${recipe.idMeal}`} key={recipe.idMeal}>
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