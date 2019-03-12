import React from 'react';
import { withRouter } from 'react-router-dom';
import { button, Link, NavLink } from 'react-router-dom';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllRecipes();
  }
  // componentWillMount() {
  //   this.props.fetchAllRecipes();
  // }

  // componentWillReceiveProps(newState) {
  //   this.setState({ recipes: newState.recipes });
  // }

  render() {
    return (
      <div className="index-recipes">
        <NavLink to={`/recipes/new`}>
          <div className="create-recipe">Create Recipe</div>
        </NavLink>
        <h2>All Recipes</h2>
        {this.props.recipes.map( (recipe,idx) => (
          <NavLink to={`/recipes/${recipe._id}`} key={idx} >
            <div className="index-recipe-title">{recipe.title}</div>
          </NavLink>
        ))}
      </div>
    );
  }
}

export default withRouter(Recipe);
