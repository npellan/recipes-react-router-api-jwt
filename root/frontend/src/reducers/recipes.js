import {
  FETCH_RECIPES,
  SET_RECIPES,
  FETCH_FAVORITES_RECIPES,
  SET_FAVORITES_RECIPES,
} from 'src/actions/recipes';

import {
  LOGOUT,
} from 'src/actions/user';

export const initialState = {
  list: [],
  favorites: [],
  loading: true,
  favoriteLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        loading: true,
      };
    case SET_RECIPES:
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    case FETCH_FAVORITES_RECIPES:
      return {
        ...state,
        favoriteLoading: true,
      };
    case SET_FAVORITES_RECIPES:
      return {
        ...state,
        favorites: action.favorites,
        favoriteLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        favorites: [],
      };
    default:
      return state;
  }
};
