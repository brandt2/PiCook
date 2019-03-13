import { connect } from 'react-redux';
import { 
  getAllCategories,
  startLoadingAllRecipes 
} from '../../actions/recipe_actions';
import DBCategories from './db_categories'

const mapStateToProps = state => ({
  recipes: Object.values(state.recipes),
  loading: state.loading.indexLoading
})

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories()),
  startLoadingAllRecipes: () => dispatch(startLoadingAllRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(DBCategories)