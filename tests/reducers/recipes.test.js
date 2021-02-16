import { expect } from 'chai';
import recipeReducer, { initialState } from 'src/reducers/recipes';
import { setRecipes } from 'src/actions/recipes';

describe('reducer for recipes', () => {
  describe('structure', () => {
    it('must be a function', () => {
      expect(recipeReducer).to.be.a('function');
    });

    it('check initial state', () => {
      expect(initialState).to.be.an('object');
      expect(recipeReducer()).to.be.equal(initialState);
    });
  });

  describe('actions', () => {
    it('setRecipes must set recipes', () => {
      const newRecipes = [{ title: 'Recipe 1' }, { title: 'Recipe 2' }];
      const action = setRecipes(newRecipes);
      const newState = recipeReducer(initialState, action);
      expect(newState).to.be.eql({ list: newRecipes, loading: false });
    });
  });
});
