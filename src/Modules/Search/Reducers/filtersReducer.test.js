import { UPDATE_FILTERS } from '../actionTypes';

import filtersReducer from './filtersReducer';

it('doesn´t touch the state when the action type is unrecognized', () => {
  const state = 'initial state';
  const action = { type: 'strange_action' }
  expect(filtersReducer(state, action)).toEqual(state);
});

const mockState = {
  name: 'Nachito', position: '9 de area', age: 22
}

it('returns correct state when the action type is UPDATE_FILTERS', () => {
  const mockFilters = { name: 'Nacho', position: 'DT', age: '22' }
  const expectedState = mockFilters;
  const action = { type: UPDATE_FILTERS, filters: mockFilters }
  expect(filtersReducer(mockState, action)).toEqual(expectedState);  
});