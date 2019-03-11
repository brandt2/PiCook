import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import './index.css';
import axios from 'axios';

import { getRecipesByDishName } from './actions/recipe_actions';
import { request } from './util/recipe_api_util';

// ReactDOM.render(<App />, document.getElementById('root'));


document.addEventListener("DOMContentLoaded", () => {
  let store;
  store = configureStore();

  // Test
  window.axios = axios;
  window.dispatch = store.dispatch;
  window.getRecipesByDishName = getRecipesByDishName;
  window.request = request;
  // Test end

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});