import React from 'react';
import { Link } from 'react-router-dom';

class DBRecipesByCategory extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getRecipesByCategory(this.props.match.params.cat)
  }
  
  render() {

    const recipes = this.props.recipes.map((recipe, index) =>
      (
        <div className="recipe-index-div">
          <h1 className="recipe-index-title">{recipe.strMeal}</h1>
          <Link to={`/dbmeals/${recipe.idMeal}`} key={recipe.idMeal}>
            <img className="each-recipe" src={recipe.strMealThumb} />
          </Link>
        </div>
      )
    )

    return(
      <div>
        {recipes}
      </div>
    )
  }
}

export default DBRecipesByCategory;