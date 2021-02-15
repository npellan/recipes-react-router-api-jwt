import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Switch,
  Route,
} from 'react-router-dom';

import store from 'src/store';

import {
  getRecipes,
} from 'src/actions';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

// import recipes from 'src/data';

import Loading from './Loading';

import './style.scss';

function App({ loading, recipes }) {
  if (loading) {
    return <Loading />;
  }

  useEffect(() => store.dispatch(getRecipes()), []);

  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {recipes.map((recipe) => (
          <Route path={`/recipe/${recipe.slug}`} exact key={recipe.id}>
            <Recipe recipe={recipe} />
          </Route>
        ))}
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  recipes: PropTypes.array.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
