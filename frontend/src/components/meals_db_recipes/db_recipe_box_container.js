import { connect } from 'react-redux';
import DBRecipeBox from './db_recipe_box';
import { getRecipeById } from '../../actions/recipe_actions'

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes[ownProps.match.params.idMeal]
})

const mapDispatchToProps = dispatch => ({
  getRecipeById: id => dispatch(getRecipeById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DBRecipeBox);