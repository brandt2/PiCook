import React from 'react';
import { withRouter } from 'react-router-dom';

class ShowRecipe extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.recipe;
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }
  // componentWillMount() {
  //   this.props.fetchRecipe(this.props.match.params.id);
  // }

  render() {
    if (!this.props.recipe) {
      return null;
    }
    return (
      <div className="show-recipe">
        <div className="one-recipe">
          <h2 className="show-recipe-title">{this.props.recipe.title}</h2>
          <div className="show-recipe-price">{this.props.recipe.price}</div>
          <div className="show-recipe-instructions">{this.props.recipe.instructions}</div>
          <div className="show-recipe-ingredients">{this.props.recipe.ingredients}</div>
          <div className="show-recipe-note">{this.props.recipe.note}</div>
          <div className="show-recipe-date">{this.props.recipe.date}</div>
        </div>

        <button>Delete Recipe</button>
        <br/>
        <button>Update Recipe</button>
      </div>
    );
  }
}

export default withRouter(ShowRecipe);
