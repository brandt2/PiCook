import { connect } from 'react-redux';
import DBRecipeBox from './db_recipe_box';
import {
  getRecipeById,
  startLoadingAllRecipes
} from '../../actions/recipe_actions'

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes[ownProps.match.params.idMeal],
  loading: state.loading.indexLoading
})

const mapDispatchToProps = dispatch => ({
  startLoadingAllRecipes: () => dispatch(startLoadingAllRecipes()),
  getRecipeById: id => dispatch(getRecipeById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DBRecipeBox);