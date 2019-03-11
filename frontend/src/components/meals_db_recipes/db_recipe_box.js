import React from 'react';

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
    // const instructions = recipe.strInstructions.slice(".").join("\r\n");

    console.log(recipe.strInstructions);

    const instructions = (
      JSON.stringify(recipe.strInstructions)
        .split('\\r\\n').map(paragraph => (
          <div>{paragraph}</div>
        )
      )
    )
    // debugger
    return (
      <div className="each-recipe">
        <h3>{recipe.strMeal}</h3>
        <img src={recipe.strMealThumb}></img>
        <div>
          {}
          {instructions}
        </div>
      </div>
    )
  }
}

export default DBRecipeBox;