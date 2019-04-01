import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './show-recipe.css';

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
        <span className="show-recipe-background"></span>
        <div className="one-recipe">
          <div className="nested-flex">
          <NavLink className="back-recipe-button show-buttons" to='/recipes/'><i class="fas fa-arrow-left"></i></NavLink>
            <div className="show-label-wrapper">
              <div className="recipe-label">Title:</div>
              <div className="show-recipe-title">{this.props.recipe.title}</div>
            </div>
            <div className="show-label-wrapper">
              <div className="recipe-label">Price:</div>
              <div className="show-recipe-price">${this.props.recipe.price}</div>
            </div>
            <div className="show-label-wrapper">
              <div className="recipe-label">Instructions:</div>
              <div className="show-recipe-instructions">{this.props.recipe.instructions}</div>
            </div>
            <div className="show-label-wrapper">
              <div className="recipe-label">Ingredients:</div>
              <div className="show-recipe-ingredients">{this.props.recipe.ingredients}</div>
            </div>
            <div className="show-label-wrapper">
              <div className="recipe-label">Note:</div>
              <div className="show-recipe-note">{this.props.recipe.note}</div>
            </div>
            <div className="show-label-wrapper">
              <div className="recipe-label">Date:</div>
              <div className="show-recipe-date">{this.props.recipe.date}</div>
            </div>
            <div className="show-buttons">
              <button className="recipe-delete-button" onClick={this.handleDelete}>Delete Recipe</button>
              {/* <NavLink className="back-recipe-button show-buttons" to='/recipes/'><i class="fas fa-arrow-left"></i></NavLink> */}
              <NavLink to={`/recipes/update/${this.props.recipe._id}`} >
                <div className="recipe-update-button">Update Recipe</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowRecipe);
