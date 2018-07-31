import { createSelector } from 'reselect';

const getFilters = (state) => state.filters;

const getPositions = (state) => state.positions;

export const getFiltersSelector = createSelector(
  [getFilters],
  (getFilters) => getFilters
);

export const getPositionsSelector = createSelector(
  [getPositions],
  (getPositions) => getPositions
);