export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER_LOADING_STATE = 'SET_USER_LOADING_STATE';

/**
 * Action qui met à jour la valeur des champs dans le store
 * @param {string} value
 * @param {string} name
 */
export const setFieldValue = (value, name) => ({
  type: SET_FIELD_VALUE,
  value,
  name,
});

/**
 * Action qui envoie une requête à l'API afin de s'authentifier
 */
export const sendLogin = () => ({
  type: SEND_LOGIN,
});

/**
 * Action qui met à jour isLogged (à true) dans le store
 */
export const login = (pseudo) => ({
  type: LOGIN,
  pseudo,
});

/**
 * Action qui met à jour isLogged (à false) dans le store
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action qui met le form de connexion en loading
 * @param {Boolean} loading
 */
export const setUserLoadingState = (loading) => ({
  type: SET_USER_LOADING_STATE,
  loading,
});
