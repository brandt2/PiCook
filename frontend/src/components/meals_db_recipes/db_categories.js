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
      if (cat.strCategory === "Pork") cat.strCategoryThumb = "https://www.themealdb.com/images/category/pork.png"
      return (
      <div className="recipe-index-div">
        <h1 className="recipe-index-title">{cat.strCategory}</h1>
        <Link to={`/categories/${cat.strCategory}`} key={cat.idCategory}>
          <img className="each-recipe" src={cat.strCategoryThumb} />
        </Link>
      </div>

      )
    })
    
    return(
      <div className="index-background">
        <div className="yes-index-recipes">
          <div className="title-index">
            <h2 className="found-title">Found Categories</h2>
          </div>
          <div className="index-recipes">
            {categories}
          </div>
        </div>
      </div>
    )
  }

}


export default DBCategories;