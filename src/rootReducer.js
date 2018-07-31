import { combineReducers } from 'redux';

// reducers
import playersReducer from './Modules/PlayerList/reducer';
import statusReducer from './Modules/Status/reducer';
import filtersReducer from './Modules/Search/Reducers/filtersReducer';
import positionsReducer from './Modules/Search/Reducers/positionsReducer';

const rootReducer = combineReducers({
  positions: positionsReducer,
  players: playersReducer,
  filters: filtersReducer,
  status: statusReducer
});

export default rootReducer;