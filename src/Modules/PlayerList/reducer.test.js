import { RECEIVE_PLAYERS } from './actionTypes';

import playersReducer from './reducer';

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players;
    default:
      return state;
  }
};

it('doesn´t touch the state when the action type is unrecognized', () => {
  const state = 'initial state';
  const action = { type: 'strange_action' }
  expect(playersReducer(state, action)).toEqual(state);
});

const mockState = {
  players: []
}

it('returns correct state when the action type is RECEIVE_PLAYERS', () => {
  const mockPlayers = [{}, {}, {}];
  const expectedState = mockPlayers;
  const action = { type: RECEIVE_PLAYERS, players: mockPlayers }
  expect(playersReducer(mockState, action)).toEqual(expectedState);  
});