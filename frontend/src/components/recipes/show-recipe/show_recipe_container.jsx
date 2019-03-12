// import React from 'react';
import { connect } from 'react-redux';

import { 
  fetchRecipe,
  updateRecipe,
  deleteRecipe
} from '../../../actions/user_recipe_actions';

import ShowRecipe from './show_recipe';


const mapStateToProps = (state, ownProps) => {
  return{
    user: state.session.user,    
    // recipes: Object.values(state.user_recipes),
    recipe: state.user_recipes[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchRecipe: (id) => dispatch(fetchRecipe(id)),
    updateRecipe: (data) => dispatch(updateRecipe(data)),
    deleteRecipe: (id) => dispatch(deleteRecipe(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowRecipe);

