import React from 'react';
import PropTypes from 'prop-types';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import recipes from 'src/data';

import Loading from './Loading';

import './style.scss';

function App({ loading }) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu recipes={recipes} />
      <Switch>
        <Route path="/" exact>
          <Home recipes={recipes} />
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
};

App.defaultProps = {
  loading: false,
};

export default App;
