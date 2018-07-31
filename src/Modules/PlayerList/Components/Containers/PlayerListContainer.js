// react-redux
import { connect } from 'react-redux';

// components
import PlayerList from '../Presentation/PlayerList';

// selectors
import { getFilteredPlayersSelector } from '../../selectors';

import Status from '../../../Status/index';

const mapStateToProps = (state) => ({
  players: getFilteredPlayersSelector(state),
  status: Status.selectors.getStatusSelector(state)
});

export default connect(
  mapStateToProps
)(PlayerList);