import { connect } from 'react-redux';

// components
import SearchPlayer from '../Presentation/SearchPlayer';

// actions
import { updateFilters } from '../../actions';

// selectors
import { getPositionsSelector, getFiltersSelector } from '../../selectors';

const mapStateToProps = (state) => ({
  positions: getPositionsSelector(state),
  filters: getFiltersSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, position, age) => (
    dispatch(updateFilters(name, position, age))
  )
});

const SearchPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPlayer);

export default SearchPlayerContainer;