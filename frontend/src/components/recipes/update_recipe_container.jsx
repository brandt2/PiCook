import { connect } from 'react-redux';
import UpdateRecipe from './update_recipe';

import { updateRecipe } from '../../actions/user_recipe_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.user,
    formType: "Update",
    recipe: state.user_recipes[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateRecipe: (recipe) => dispatch(updateRecipe(recipe))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecipe);

