import React from 'react';
import { withRouter } from 'react-router-dom';
import { button, Link, NavLink } from 'react-router-dom';

import './index-recipe.css';

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

  componentWillReceiveProps(newState) {
    this.setState({ recipes: newState.recipes });
  }

  render() {
    return (
      <div className="index-all-recipes">
        <span className="index-recipe-background"></span>
        <div className="all-recipes-msg">All Recipes</div>
        <NavLink className="create-recipe" to={`/recipes/new`}>
          <div className="create-recipe-msg">Create Recipe</div>
        </NavLink>

        <div className="all-recipes">
          {this.props.recipes.map( (recipe,idx) => (
            <NavLink className="single-recipe-link" to={`/recipes/${recipe._id}`} key={idx} >
              <div className="single-recipe">
                <div className="index-recipe-title">{recipe.title.slice(0,10)}</div>
                <div className="avg-price">Avg Price:</div>
                <div className="index-recipe-price">${recipe.price%1000000}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Recipe);
