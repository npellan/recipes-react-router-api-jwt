import { expect, should } from 'chai';
import { findRecipeBySlug, getTitleByRecipeNumber } from 'src/selectors';

should();

describe('selectors', () => {
  describe('findRecipeBySlug', () => {
    const recipesData = [
      { slug: 'recipe-1' },
      { slug: 'recipe-2' },
      { title: 'Recipe 3' },
    ];

    it('must be a function', () => {
      findRecipeBySlug.should.be.a('function');
    });

    it('must return a matching object', () => {
      findRecipeBySlug(recipesData, 'recipe-1').should.be.an('object');
    });

    it('must return a undefined if not match', () => {
      expect(findRecipeBySlug(recipesData, 'notfound')).to.be.undefined;
    });

    it('must not throw if slug is undefined', () => {
      expect(() => findRecipeBySlug(recipesData, undefined)).to.not.throw();
    });
  });

  describe('getTitleByRecipeNumber', () => {
    describe('structure', () => {
      it('should be a function', () => {
        expect(getTitleByRecipeNumber).to.be.a('function');
      });
      it('should return a string', () => {
        expect(getTitleByRecipeNumber()).to.be.a('string');
      });
    });

    describe('execution', () => {
      it('should return "Recettes à venir. Revenez bientôt" when 0 recipes given', () => {
        expect(getTitleByRecipeNumber(0)).to.be.equal('Recettes à venir. Revenez bientôt');
      });
      it('should return "Découvrez notre recette" when 1 recipe given', () => {
        expect(getTitleByRecipeNumber(1)).to.be.equal('Découvrez notre recette');
      });
      it('should return "Découvrez toutes nos recettes" when 2 or more recipes given', () => {
        expect(getTitleByRecipeNumber(2)).to.be.equal('Découvrez toutes nos recettes');
        expect(getTitleByRecipeNumber(10)).to.be.equal('Découvrez toutes nos recettes');
        expect(getTitleByRecipeNumber(100)).to.be.equal('Découvrez toutes nos recettes');
      });
    });
  });
});
