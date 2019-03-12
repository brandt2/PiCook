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

    this.props.deleteRecipe(this.props.recipe._id);
    this.props.history.push("/recipes");
  }

  render() {
    if (!this.props.recipe) {
      return null;
    }
    return (
      <div className="show-recipe">
        <div className="one-recipe">
          <div className="recipe-title">Title:</div>
            <div className="show-recipe-title">{this.props.recipe.title}</div>
          <div className="recipe-price">Price:</div>
            <div className="show-recipe-price">${this.props.recipe.price}</div>
          <div className="recipe-instructions">Instructions:</div>
            <div className="show-recipe-instructions">{this.props.recipe.instructions}</div>
          <div className="recipe-ingredients">Ingredients:</div>
            <div className="show-recipe-ingredients">{this.props.recipe.ingredients}</div>
          <div className="recipe-note">Note:</div>
            <div className="show-recipe-note">{this.props.recipe.note}</div>
          <div className="recipe-date">Date:</div>
            <div className="show-recipe-date">{this.props.recipe.date}</div>
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
