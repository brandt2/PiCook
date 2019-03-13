import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

import './index.css';
import axios from 'axios';

import { getRecipesByCategory } from './actions/recipe_actions';
import { request } from './util/recipe_api_util';

// ReactDOM.render(<App />, document.getElementById('root'));


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser} };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  // Test
  window.axios = axios;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.getRecipeById = getRecipeById;
  window.getRecipesByCategory = getRecipesByCategory;
  window.uploadImageToS3 = uploadImageToS3;
  // window.request = request;
  // Test end

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});