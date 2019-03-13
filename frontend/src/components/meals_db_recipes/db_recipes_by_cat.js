import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon.js';

class DBRecipesByCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.getRecipesByCategory(this.props.category)
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

    const recipes = this.props.recipes.map((recipe, index) => {
      return (
        <div className="recipe-index-div" key={index}>
          <h1 className="recipe-index-title">{recipe.strMeal}</h1>
          <Link to={`/dbmeals/food/${recipe.idMeal}`}>
            <img className="each-recipe" src={recipe.strMealThumb} alt={recipe.strMeal}/>
          </Link>
        </div>
      )

    }
    )

    return(
      <div className="index-background">
        <div className="yes-index-recipes">
          <div className="title-index">
            <h2 className="found-title">Found Recipes</h2>
          </div>
          <div className="index-recipes">
            {recipes}
          </div>
        </div>
      </div>
    )
  }
}

export default DBRecipesByCategory;