import { connect } from 'react-redux';

import App from 'src/components/App';

import {
  getRecipes,
} from 'src/actions';

const mapStateToProps = (state) => ({
  loading: state.loading,
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: (recipes) => dispatch(getRecipes(recipes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
