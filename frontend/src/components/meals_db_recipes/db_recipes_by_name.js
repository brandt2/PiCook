import React from 'react';
import DBRecipeBox from './db_recipe_box';
import { withRouter } from 'react-router-dom';

class DBRecipesByName extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      recipes: []
    }

    this.keyword = "chicken"
  }
  componentDidMount() {
    this.setState(this.props.getRecipesByDishName(this.keyword))
    console.log(this.state)
  }
  render() {
    // get search keyword from props from alec
    if (this.state.recipes.length === 0) {
      return (
        <div>Sorry, no recipes for {`${this.keyword}`}</div>
      )
    } else {
      return (
        <div className="yes-index-recipes">
          <h2>Recipes Found</h2>
          {this.state.recipes.map(recipe => (
            <DBRecipeBox key={recipe._id} recipe={recipe}/>
          ))}
        </div>
      )
    }
  }
}

export default withRouter(DBRecipesByName)