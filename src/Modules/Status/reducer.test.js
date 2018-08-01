import { LOAD_STATUS, ERROR_STATUS, OK_STATUS } from './actionTypes';

import { statusReducer } from './reducer';

it('doesn´t touch the state when the action type is unrecognized', () => {
  const state = 'initial state';
  const action = { type: 'strange_action' }
  expect(statusReducer(state, action)).toEqual(state);
});

const mockState = {
  isLoading: false, error: false, errorMessage: ''
}

it('returns correct state when the action type is LOAD_STATUS', () => {
  const expectedState = { isLoading: true, error: false }
  const action = { type: LOAD_STATUS }
  expect(statusReducer(mockState, action)).toEqual(expectedState);  
});

it('returns correct state when the action type is ERROR_STATUS', () => {
  const errorMessage = 'You have broken everything';
  const expectedState = { isLoading: false, error: true, errorMessage: errorMessage }
  const action = { type: ERROR_STATUS, error: errorMessage }
  expect(statusReducer(mockState, action)).toEqual(expectedState);  
});

it('returns correct state when the action type is OK_STATUS', () => {
  const expectedState = { isLoading: false, error: false }
  const action = { type: OK_STATUS }
  expect(statusReducer(mockState, action)).toEqual(expectedState);  
});