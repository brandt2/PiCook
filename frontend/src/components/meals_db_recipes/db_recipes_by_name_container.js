import { connect } from 'react-redux';
import { 
  getRecipesByDishName,
  startLoadingAllRecipes
} from '../../actions/recipe_actions';
import DBRecipesByName from './db_recipes_by_name';

const mapStateToProps = state => {
  return ({
    recipes:Object.values(state.recipes),
    loading: state.loading.indexLoading
  })
}

const mapDispatchToProps = dispatch => ({
  startLoadingAllRecipes: () => dispatch(startLoadingAllRecipes()),
  getRecipesByDishName: keyword => dispatch(getRecipesByDishName(keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DBRecipesByName);