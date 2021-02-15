import { connect } from 'react-redux';

import Content from 'src/components/Content';

const mapStateToProps = (state) => ({
  title: state.title,
  text: state.text,
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
