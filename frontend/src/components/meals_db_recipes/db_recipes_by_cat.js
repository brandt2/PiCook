import React from 'react';
import { Link } from 'react-router-dom';

class DBRecipesByCategory extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getRecipesByCategory(this.props.category)
  }
  
  render() {
    const recipes = this.props.recipes.map((recipe, index) => {
      return (
        <div className="recipe-index-div" key={index}>
          <h1 className="recipe-index-title">{recipe.strMeal}</h1>
          <Link to={`/dbmeals/food/${recipe.idMeal}`}>
            <img className="each-recipe" src={recipe.strMealThumb} />
          </Link>
        </div>
      )

    }
    )

    return(
      <div>
        ajdiofjdiosfjoidsjfoisdjfdsiofjdsfjsdojfsidojoidsfjoisd
        {recipes}
      </div>
    )
  }
}

export default DBRecipesByCategory;