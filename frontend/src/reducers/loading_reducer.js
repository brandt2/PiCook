import {
  RECEIVE_RECIPE,
  RECEIVE_RECIPES,
  START_LOADING_ALL_RECIPES,
  START_LOADING_RECIPE
} from '../actions/recipe_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_RECIPE:
      return Object.assign({}, state, { detailLoading: false });
    case RECEIVE_RECIPES:
      return Object.assign({}, state, { indexLoading: false });
    case START_LOADING_ALL_RECIPES:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_RECIPE:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;