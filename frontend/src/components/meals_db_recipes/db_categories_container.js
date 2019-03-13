import { connect } from 'react-redux';
import { getAllCategories } from '../../actions/recipe_actions';
import DBCategories from './db_categories'

const mapStateToProps = state => ({
  recipes: Object.values(state.recipes) 
})

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(DBCategories)