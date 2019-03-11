import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DBRecipesByNameContainer from './meals_db_recipes/db_recipes_by_name_container'
import DBRecipeBoxContainer from './meals_db_recipes/db_recipe_box_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/dbmeals/:idMeal" component={DBRecipeBoxContainer} />
      <Route path="/dbmeals" component={DBRecipesByNameContainer} />
    </Switch>
  </div>
);

export default App;