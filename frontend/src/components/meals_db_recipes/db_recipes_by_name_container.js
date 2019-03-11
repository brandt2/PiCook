import { connect } from 'react-redux';
import { 
  getRecipesByDishName,
} from '../../actions/recipe_actions';
import DBRecipesByName from './db_recipes_by_name';

const mapStateToProps = state => ({
  // recipes:Object.values(state.recipes)
})

const mapDispatchToProps = dispatch => ({
  getRecipesByDishName: keyword => dispatch(getRecipesByDishName(keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DBRecipesByName);