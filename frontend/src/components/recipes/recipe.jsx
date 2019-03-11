import React from 'react';
import { withRouter } from 'react-router-dom';
import { button, Link, NavLink } from 'react-router-dom';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
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
        <div className="index-recipes">
          <h2>All Recipes</h2>
          {this.state.recipes.map( (recipe,idx) => (
            <NavLink to={`/recipes/${recipe.id}`} key={idx} >
              <div className="index-recipe-title">{recipe.title}</div>
            </NavLink>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Recipe);
