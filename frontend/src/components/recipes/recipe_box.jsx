import React from 'react';

class RecipeBox extends React.Component {
  render() {
    return (
        <div className="each-recipe">
            <h3>{this.props.title}</h3>
        </div>
    );
  }
}

export default RecipeBox;
