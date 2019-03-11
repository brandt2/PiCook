import React from 'react';

class DBRecipeBox extends React.Component {
  render() {
    return (
      <div className="each-recipe">
        <h3>{this.props.recipe.strMeal}</h3>
      </div>
    )
  }
}

export default DBRecipeBox;