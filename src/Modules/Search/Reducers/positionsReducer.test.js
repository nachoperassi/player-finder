import { LOAD_POSITIONS } from '../actionTypes';

import positionsReducer from './positionsReducer';

it('doesn´t touch the state when the action type is unrecognized', () => {
  const state = 'initial state';
  const action = { type: 'strange_action' }
  expect(positionsReducer(state, action)).toEqual(state);
});

const mockState = {
  positions: [
    'Guardameta',
    'Enganche'
  ]
}

it('returns correct state when the action type is LOAD_POSITIONS', () => {
  const mockPositions = ['Keeper', 'Centre-Forward']
  const expectedState = mockPositions;
  const action = { type: LOAD_POSITIONS, positions: mockPositions }
  expect(positionsReducer(mockState, action)).toEqual(expectedState);  
});