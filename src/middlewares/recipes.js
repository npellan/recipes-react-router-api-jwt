/* eslint-disable no-empty */

import {
  FETCH_RECIPES, setRecipes, FETCH_FAVORITES_RECIPES, setFavoritesRecipes,
} from 'src/actions/recipes';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  const { user: { token } } = store.getState();
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('/recipes')
        .then((result) => {
          store.dispatch(setRecipes(result.data));
        });
      return next(action);
    case FETCH_FAVORITES_RECIPES:
      axios.get('/favorites', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((result) => {
          store.dispatch(setFavoritesRecipes(result.data.favorites));
        });
      return next(action);
    default:
      return next(action);
  }
};
