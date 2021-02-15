/* eslint-disable no-empty */

import { FETCH_RECIPES, setRecipes } from 'src/actions/recipes';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('/recipes')
        .then((result) => {
          store.dispatch(setRecipes(result.data));
        });
      return next(action);
    default:
      return next(action);
  }
};
