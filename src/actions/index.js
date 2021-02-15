// Action types
export const GET_RECIPES = 'GET_RECIPES';
export const SET_RECIPES = 'SET_RECIPES';

// Action creators
export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes,
});
