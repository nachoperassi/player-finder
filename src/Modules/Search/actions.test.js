import configureStore from 'redux-mock-store'

import { loadPositions, updateFilters } from './actions';

import { positions } from './constants';

const mockStore = configureStore();

it('action ´loadPositions´ contains expected payload', () => {
  const store = mockStore();
  store.dispatch(loadPositions());
  const action = store.getActions()[0];
  expect(Object.keys(action)).toContain('positions');
  expect(action.positions).not.toBeNull();
  expect(action.positions).toEqual(positions);
});

it('action ´updateFilters´ contains expected payload', () => {
  const store = mockStore();
  const mockFilters = {
    name: 'Nacho Perassi',
    position: 'Crack (?)',
    age: 22
  }
  const { name, position, age } = mockFilters;
  store.dispatch(updateFilters(name, position, age));
  const action = store.getActions()[0];
  expect(action.filters).not.toBeUndefined();
  expect(action.filters).not.toBeNull();
  expect(action.filters).toEqual(mockFilters);
})