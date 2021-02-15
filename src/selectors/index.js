/* eslint-disable import/prefer-default-export */
/**
 * Fonction qui renvoie UNE recette en fonction du slug et de la liste des recettes
 * ou undefined si la recette n'a pas été trouvée
 * @param {Array} recipes
 * @param {String} slug
 * @returns {Object|undefined}
 */

export const findRecipeBySlug = (recipes, slug) => (
  recipes.find((recipe) => recipe.slug === slug)
);
