import { combineReducers } from 'redux';
import example from './exampleReducer';
import recipes from './recipes';

export default combineReducers({
  example,
  recipes,
});
