import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { fetchFavoritesRecipes } from 'src/actions/recipes';

const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
  favoritesRecipes: state.recipes.favorites,
  isLogged: state.user.isLogged,
  loading: state.recipes.favoriteLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => dispatch(fetchFavoritesRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
