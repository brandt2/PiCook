import React from 'react';
import DBRecipeBox from './db_recipe_box';
import { withRouter } from 'react-router-dom';

class DBRecipesByName extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      recipes: []
    }

    this.keyword = "Ma Po Tofu"
  }
  componentDidMount() {
    this.props.getRecipesByDishName(this.keyword)
    // this.setState(this.props.getRecipesByDishName(this.keyword))
  }
  render() {
    // get search keyword from props from alec
    if (this.props.recipes.length === 0) {
      return (
        <div>Sorry, no recipes for {`${this.keyword}`}</div>
      )
    } else {
      return (
        <div className="yes-index-recipes">
          <h2>Recipes Found</h2>
          {this.props.recipes.map((recipe, i) => (
            <DBRecipeBox key={i} recipe={recipe}/>
          ))}
        </div>
      )
    }
  }
}

export default withRouter(DBRecipesByName)