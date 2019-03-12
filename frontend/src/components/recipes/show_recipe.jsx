import React from 'react';
import { withRouter } from 'react-router-dom';
import { button, Link, NavLink } from 'react-router-dom';

class ShowRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }
  // componentWillMount() {
  //   this.props.fetchRecipe(this.props.match.params.id);
  // }

  handleDelete(e) {
    e.preventDefault();

    this.props.deleteRecipe(this.props.recipe.id);
  }

  render() {
    if (!this.props.recipe) {
      return null;
    }
    return (
      <div className="show-recipe">
        <div className="one-recipe">
          <div className="recipe-title">Title:</div><div className="show-recipe-title">{this.props.recipe.title}</div>
          <div className="show-recipe-price">${this.props.recipe.price}</div>
          Instructions: <div className="show-recipe-instructions">{this.props.recipe.instructions}</div>
          Ingredients: <div className="show-recipe-ingredients">{this.props.recipe.ingredients}</div>
          Note: <div className="show-recipe-note">{this.props.recipe.note}</div>
          Date: <div className="show-recipe-date">{this.props.recipe.date}</div>
        </div>

        <button onClick={this.handleDelete}>Delete Recipe</button>
        <br/>
        <NavLink to={`/recipes/update/${this.props.recipe._id}`} >
          <div className="index-recipe-title">Update Recipe</div>
        </NavLink>
      </div>
    );
  }
}

export default withRouter(ShowRecipe);
