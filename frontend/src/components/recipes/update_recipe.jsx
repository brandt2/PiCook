import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateRecipe extends React.Component {
  constructor(props) {
    super(props);

    // ERRORS WHEN REFRESH AT UPDATE FORM
    this.state = {
      title: this.props.recipe.title || "",
      price: this.props.recipe.price || 0,
      instructions: this.props.recipe.instructions || "",
      ingredients: this.props.recipe.ingredients || "",
      note: this.props.recipe.note || ""
    };

    // OR
    // NOTHING RENDERS WHEN REFRESH
    // this.state = this.props.recipe;

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();

    this.props.updateRecipe({
      title: this.state.title, 
      instructions: this.state.instructions, 
      ingredients: this.state.ingredients,
      price: this.state.price,
      note: this.state.note,
      id: this.props.recipe._id
    });
    this.props.history.push(`/recipes/${this.props.recipe._id}`);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    if (!this.props.recipe) {
      return null;
    }
    return(
      <div>
        <h1 className="create-recipe-header">Update Recipe</h1>
        <form onSubmit={this.handleSubmit}>
          <span className="required-fields">*</span>
          <span className="required-msg">Required fields</span>

          <div className="new-recipe-form">
            <label>
              <span className="required">*</span>
              <input type="text"
                className="new-recipe-title"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder="Title"
              />
            </label>
            <label>
              <input type="text"
                className="new-recipe-price"
                value={this.state.price}
                onChange={this.update('price')}
                placeholder="Price"
              />
            </label>
            <label>
              <span className="required">*</span>
              <input type="text"
                className="new-recipe-instructions"
                value={this.state.instructions}
                onChange={this.update('instructions')}
                placeholder="Instructions"
              />
            </label>
            <label>
              <span className="required">*</span>
              <input type="text"
                className="new-recipe-ingredients"
                value={this.state.ingredients}
                onChange={this.update('ingredients')}
                placeholder="Ingredients"
              />
            </label>
            <label>
              <input type="text"
                className="new-recipe-note"
                value={this.state.note}
                onChange={this.update('note')}
                placeholder="Note"
              />
            </label>
          </div>
          <input className="recipe-create" type="submit" value="UPDATE" />
        </form>
      </div>
    )
  }
}

export default withRouter(UpdateRecipe);