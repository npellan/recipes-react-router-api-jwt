import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import Loading from 'src/components/App/Loading';

const Home = ({
  recipes, favoritesRecipes, isLogged, fetchFavorites, loading,
}) => {
  useEffect(() => {
    if (isLogged) {
      fetchFavorites();
    }
  }, [isLogged]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes favorites"
        text={
          isLogged
            ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.'
            : 'Vous devez être connecté pour visualiser vos recettes favorites.'
        }
        recipes={favoritesRecipes}
      />
      <Content
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
};

Home.propTypes = {
  recipes: PropTypes.array,
  favoritesRecipes: PropTypes.array,
  isLogged: PropTypes.bool,
  fetchFavorites: PropTypes.func,
  loading: PropTypes.bool,
};

Home.defaultProps = {
  recipes: [],
  favoritesRecipes: [],
  isLogged: false,
  fetchFavorites: () => {},
  loading: false,
};

export default Home;
