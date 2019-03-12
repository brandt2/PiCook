import React from 'react';
import { withRouter } from 'react-router-dom';
import { button, Link, NavLink } from 'react-router-dom';

<<<<<<< HEAD
=======
import './index-recipe.css';
>>>>>>> master

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
      <div className="index-recipes">
        <NavLink to={`/recipes/new`}>
          <div className="create-recipe">Create Recipe</div>
        </NavLink>
        <div className="all-recipes-msg">All Recipes</div>
        <div className="all-recipes">
          {this.props.recipes.map( (recipe,idx) => (
            <NavLink to={`/recipes/${recipe._id}`} key={idx} >
              <div className="index-recipe-title">{recipe.title}</div>
              <div className="index-recipe-price">{recipe.price}</div>
              <div className="index-recipe-date">{recipe.date}</div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Recipe);
