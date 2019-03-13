import React from 'react';
import { withRouter } from 'react-router-dom';
import './create-recipe.css';
import DBIngredients from '../../meals_db_recipes/db_ingredients';

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: "",
      instructions: "",
      ingredients: "",
      note: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getRecipeById(this.props.match.params.id);
    const recipe = this.props.recipe;
    if (recipe) {
      this.setState({
        title: recipe.strMeal || "",
        instructions: recipe.strInstructions || "",
      })
    }
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
    const recipe = this.props.recipe;
    // const ingredients = Object.keys(DBIngredients(recipe)).map((ing, i) => (
    //   <div key={i}>{ing}</div>
    // ))
    if (recipe === undefined) return null;
    return(
      <div className="create-recipe-comp">
        <span className="create-recipe-background"></span>
        <div className="create-recipe-form">
        <div className="create-recipe-header">New Recipe</div>
          <form className="create-recipe-inputs" onSubmit={this.handleSubmit}>
            <span className="required-small">*</span>
            <span className="required-msg">Required fields</span>

            <div className="new-recipe-form">
              <div className="flex-small-inputs">
                <label className="new-title-label">
                  <span className="required-small">*</span>
                  <input type="text"
                    className="new-recipe-title new-recipe-input"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Title"
                  />
                </label>
                <label className="new-price-label">
                  <input type="text"
                    className="new-recipe-price new-recipe-input input-not-required"
                    value={this.state.price}
                    onChange={this.update('price')}
                    placeholder="Price"
                  />
                </label>
              </div>
              <label className="new-instructions-label">
                <span className="required-large">*</span>
                <textarea
                  className="new-recipe-instructions new-recipe-input input-large"
                  value={this.state.instructions}
                  onChange={this.update('instructions')}
                  placeholder="Instructions"
                />
              </label>
              <label className="new-ingredients-label">
                <span className="required-large">*</span>
                <textarea
                  className="new-recipe-ingredients new-recipe-input input-large"
                  value={this.state.ingredients}
                  onChange={this.update('ingredients')}
                  placeholder="Ingredients"
                />
              </label>
              <label className="new-note-label">
                <textarea
                  className="new-recipe-note new-recipe-input input-not-required input-large"
                  value={this.state.note}
                  onChange={this.update('note')}
                  placeholder="Note"
                />
              </label>
            </div>
            <div className="create-button-wrapper">
              <input className="recipe-create" type="submit" value="CREATE" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateRecipe);