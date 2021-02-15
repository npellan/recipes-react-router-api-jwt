// Types d'action
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SET_RECIPES = 'SET_RECIPES';

// Action creator
export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes,
});
