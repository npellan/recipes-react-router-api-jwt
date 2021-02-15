import {
  SET_RECIPES,
} from 'src/actions';

const INITIAL_STATE = {
  loading: false,
  title: 'Les recettes oRecipes',
  text: 'Les bonnes recettes de l\'équipe O\'clock',
  recipes: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
