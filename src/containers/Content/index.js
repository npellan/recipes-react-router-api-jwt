import { connect } from 'react-redux';
import Content from 'src/components/Content';

const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
