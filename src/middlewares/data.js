import {
  GET_RECIPES,
  setRecipes,
} from 'src/actions';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RECIPES:
      axios.get('/recipes')
        .then((result) => {
          store.dispatch(setRecipes(result.data));
        });
      return next(action);
    default:
      return next(action);
  }
};
