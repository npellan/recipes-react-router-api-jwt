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

/**
 * Fonction qui retourne un titre en fonction du nombre de recettes disponibles
 * @param {F} nbRecipes
 * @returns {string}
 */
export const getTitleByRecipeNumber = (nbRecipes = 0) => {
  if (nbRecipes === 0) {
    return 'Recettes à venir. Revenez bientôt';
  }
  if (nbRecipes === 1) {
    return 'Découvrez notre recette';
  }
  return 'Découvrez toutes nos recettes';
};
