import { connect } from 'react-redux';
import CreateRecipe from './create_recipe';

import { createRecipe } from '../../../actions/user_recipe_actions';

const mapStateToProps = state => {
  return({
    user: state.session.user,
    formType: "Create",
  });
};

const mapDispatchToProps = dispatch => {
  return({
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);

