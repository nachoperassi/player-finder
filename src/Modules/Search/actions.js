import { LOAD_POSITIONS, UPDATE_FILTERS } from './actionTypes';

import { positions } from './constants';

export const updateFilters = (name, position, age) => ({
  type: UPDATE_FILTERS,
  filters: {
    name: name,
    position: position,
    age: age
  }
});

export const loadPositions = () => ({
  type: LOAD_POSITIONS,
  positions: positions
});