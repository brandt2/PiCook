import { connect } from 'react-redux';
import { getRecipesByCategory } from '../../actions/recipe_actions';
import DBRecipesByCategory from './db_recipes_by_cat';

const mapStateToProps = (state, ownProps) => ({
  recipes: Object.values(state.recipes),
  category: ownProps.match.params.cat
})

const mapDispatchToProps = dispatch => ({
  getRecipesByCategory: category => dispatch(getRecipesByCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DBRecipesByCategory);