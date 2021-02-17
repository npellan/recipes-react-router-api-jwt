import {
  SET_FIELD_VALUE,
  LOGIN,
  LOGOUT,
  SET_USER_LOADING_STATE,
} from 'src/actions/user';

const initialState = {
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
  isLogged: false,
  userLoading: false,
  pseudo: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        pseudo: action.pseudo,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        pseudo: '',
      };
    case SET_USER_LOADING_STATE:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
