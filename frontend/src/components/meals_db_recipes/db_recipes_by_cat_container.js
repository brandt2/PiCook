import { connect } from 'react-redux';
import {
  getRecipesByCategory,
  startLoadingAllRecipes
} from '../../actions/recipe_actions';
import DBRecipesByCategory from './db_recipes_by_cat';

const mapStateToProps = (state, ownProps) => ({
  recipes: Object.values(state.recipes),
  category: ownProps.match.params.cat,
  loading: state.loading.indexLoading
})

const mapDispatchToProps = dispatch => ({
  startLoadingAllRecipes: () => dispatch(startLoadingAllRecipes()),
  getRecipesByCategory: category => dispatch(getRecipesByCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DBRecipesByCategory);