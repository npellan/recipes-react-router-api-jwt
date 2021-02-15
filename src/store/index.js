/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import dataMiddleware from 'src/middlewares/data';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// On créé le store en lui donnant le reducer afin transformer les actions
// en changement d'état, et pour calculer aussi l'état initial
const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      dataMiddleware,
    ),
  ),
);

export default store;
