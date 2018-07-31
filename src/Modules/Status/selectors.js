import { createSelector } from 'reselect';

const getStatus = (state) => state.status;

export const getStatusSelector = createSelector(
  [getStatus],
  (getStatus) => getStatus
);