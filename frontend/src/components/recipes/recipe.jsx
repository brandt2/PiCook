import React from 'react';
import { withRouter } from 'react-router-dom';
import RecipeBox from './recipe_box';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.recipes;
  }

  componentWillMount() {
    this.props.fetchAllRecipes();
  }

  componentWillReceiveProps(newState) {
    this.setState({ recipes: newState.recipes });
  }

  render() {
    if (this.state.recipes.length === 0) {
      return (<div className="no-index-recipes">There are no Recipes</div>)
    } else {
      return (
        <div className="yes-index-recipes">
          <h2>All Recipes</h2>
          {this.state.recipes.map(recipe => (
            <RecipeBox key={recipe.id} title={recipe.title} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Recipe);
