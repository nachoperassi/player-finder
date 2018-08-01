import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { loadPlayers } from './actions';

import Status from '../Status';
import PlayerList from '../PlayerList';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('executes players load actions in expected order', () => {
  const store = mockStore();
  store.dispatch(loadPlayers())
    .then(() => {
      expect(store.getActions()[0].type)
        .toEqual(Status.actionTypes.LOAD_STATUS);
      expect(store.getActions()[1].type)
        .toEqual(Status.actionTypes.OK_STATUS);
      expect(store.getActions()[2].type)
        .toEqual(PlayerList.actionTypes.RECEIVE_PLAYERS)
    });
});

/*it('loads players in storage', () => {
  const store = mockStore();
  store.dispatch(loadPlayers())
    .then(() => {
      console.log(store.getState());
    })
})*/

it('action ´receivePlayers´ contains expected payload', () => {
  const store = mockStore();
  store.dispatch(loadPlayers())
    .then(() => {
      const action = store.getActions()[2];
      expect(Object.keys(action)).toContain('players');
      expect(action.players).not.toBeNull();
      expect(action.players.length).toBeGreaterThan(0);
    });
})
