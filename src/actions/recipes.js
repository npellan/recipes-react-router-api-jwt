// Types d'action
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SET_RECIPES = 'SET_RECIPES';
export const FETCH_FAVORITES_RECIPES = 'FETCH_FAVORITES_RECIPES';
export const SET_FAVORITES_RECIPES = 'SET_FAVORITES_RECIPES';

// Action creator
export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes,
});

export const fetchFavoritesRecipes = () => ({
  type: FETCH_FAVORITES_RECIPES,
});

export const setFavoritesRecipes = (favorites) => ({
  type: SET_FAVORITES_RECIPES,
  favorites,
});
