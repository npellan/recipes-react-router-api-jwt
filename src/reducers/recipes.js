import {
  FETCH_RECIPES,
  SET_RECIPES,
} from 'src/actions/recipes';

export const initialState = {
  list: [],
  loading: true,
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
    default:
      return state;
  }
};
