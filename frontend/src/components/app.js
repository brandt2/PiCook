import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash/splash';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DBRecipesByNameContainer from './meals_db_recipes/db_recipes_by_name_container'
import DBRecipeBoxContainer from './meals_db_recipes/db_recipe_box_container';
import DBCategoriesContainer from './meals_db_recipes/db_categories_container';
import DBRecipesByCategoriesContainer from './meals_db_recipes/db_recipes_by_cat_container'

import RecipeContainer from './recipes/index-recipe/recipe_container';
import CreateRecipeContainer from './recipes/create-recipe/create_recipe_container';
import ShowRecipeContainer from './recipes/show-recipe/show_recipe_container';
import UpdateRecipeContainer from './recipes/update-recipe/update_recipe_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Route exact path="/" component={Splash} />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/dbmeals/food/:idMeal" component={DBRecipeBoxContainer} />
      <Route path="/dbmeals/:food" component={DBRecipesByNameContainer} />
      <Route path="/categories/:cat" component={DBRecipesByCategoriesContainer} />
      <Route path="/categories" component={DBCategoriesContainer} />
      
      <ProtectedRoute path="/recipes/new" component={CreateRecipeContainer} />
      <ProtectedRoute path="/recipes/update/:id" component={UpdateRecipeContainer} />
      <ProtectedRoute exact path="/recipes/:id" component={ShowRecipeContainer} />
      <ProtectedRoute path="/recipes" component={RecipeContainer} />
    </Switch>
  </div>
);

export default App;