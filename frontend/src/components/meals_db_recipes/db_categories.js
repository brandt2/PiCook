import React from 'react';
import { Link } from 'react-router-dom';

class DBCategories extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllCategories()
  }

  render() {
    const recipes = this.props.recipes;
    if (recipes === undefined) return null;
    
    const categories = recipes.map(cat => {
      return (
      <div className="recipe-index-div">
        <h1 className="recipe-index-title">{cat.strCategory}</h1>
        <Link to={`/dbmeals`} key={cat.idCategory}>
          <img className="each-recipe" src={cat.strCategoryThumb} />
        </Link>
      </div>

      )
    })
    
    return(
      <div>
        {categories}
      </div>
    )
  }

}


export default DBCategories;