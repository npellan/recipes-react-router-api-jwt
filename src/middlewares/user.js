/* eslint-disable no-empty */
import { SEND_LOGIN, setUserLoadingState, login } from 'src/actions/user';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  const { user: { email, password } } = store.getState();

  switch (action.type) {
    case SEND_LOGIN:
      store.dispatch(setUserLoadingState(true));
      axios.post('/login', { email, password })
        .then((result) => {
          if (result.data.logged === true) {
            store.dispatch(login(result.data.pseudo, result.data.token));
          }
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(setUserLoadingState(false));
        });
      return next(action);
    default:
      return next(action);
  }
};
