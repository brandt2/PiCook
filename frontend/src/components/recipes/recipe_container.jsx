import React from 'react';
import { connect } from 'react-redux';

import Recipe from './recipe';
import { fetchAllRecipes } from '../../actions/recipe_actions';


const mapStateToProps = state => {
  return({
    user: state.session.user,       // NOT SURE YET
    recipes: Object.values(state.recipes)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllRecipes: () => dispatch(fetchAllRecipes())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);

