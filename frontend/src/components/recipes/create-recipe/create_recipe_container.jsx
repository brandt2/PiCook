import { connect } from 'react-redux';
import CreateRecipe from './create_recipe';

import { createRecipe } from '../../../actions/user_recipe_actions';
import { getRecipeById } from '../../../actions/recipe_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    user: state.session.user,
    formType: "Create",
    recipe: state.recipes[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    createRecipe: (recipe) => dispatch(createRecipe(recipe)),
    getRecipeById: id => dispatch(getRecipeById(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);

