// import React from 'react';
import { connect } from 'react-redux';

import Recipe from './recipe';
import { fetchAllRecipes } from '../../actions/user_recipe_actions';


const mapStateToProps = state => {
  return({
    user: state.session.user,    
    recipes: Object.values(state.user_recipes)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllRecipes: () => dispatch(fetchAllRecipes())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);

