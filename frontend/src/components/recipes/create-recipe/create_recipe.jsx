import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: 0,
      instructions: "",
      ingredients: "",
      note: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createRecipe({
      title: this.state.title, 
      instructions: this.state.instructions, 
      ingredients: this.state.ingredients,
      price: this.state.price,
      note: this.state.note
    });
    this.props.history.push("/recipes");
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div>
        <h1 className="create-recipe-header">Create new Recipe</h1>
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
          <input className="recipe-create" type="submit" value="CREATE" />
        </form>
      </div>
    )
  }
}

export default withRouter(CreateRecipe);