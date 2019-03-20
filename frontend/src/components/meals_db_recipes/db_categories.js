import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon.js';

class DBCategories extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    this.props.getAllCategories()
  }

  componentDidUpdate({ loading }) {
    if (this.props.loading !== this.state.loading) {
      this.setState({ loading: this.props.loading })
    }
  }

  render() {
    const recipes = this.props.recipes;
    if (recipes === undefined) return null;

    if (this.state.loading === true) {
      return (
        <LoadingIcon />
      )
    }
    
    const categories = recipes.map(cat => {
      if (cat.strCategory === "Pork") cat.strCategoryThumb = "https://www.themealdb.com/images/category/pork.png"
      return (
      <Link to={`/categories/${cat.strCategory}`} key={cat.idCategory}>
        <div className="recipe-category-div">
          <h1 className="recipe-index-title">{cat.strCategory}</h1>
          <img className="each-recipe" src={cat.strCategoryThumb} alt={cat.strCategory}/>
        </div>
      </Link>
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