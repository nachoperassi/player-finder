import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

import PlayerList from './Modules/PlayerList/index';

import Search from './Modules/Search/index';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(
  Search.actions.loadPositions()
);

store.dispatch(
  PlayerList.actions.loadPlayers()
);

export default store;