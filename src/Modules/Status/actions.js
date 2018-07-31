import { LOAD_STATUS, ERROR_STATUS, OK_STATUS } from './actionTypes';

export const loadStatus = () => ({
  type: LOAD_STATUS
});

export const errorStatus = (error) => ({
  type: ERROR_STATUS,
  error: error
});

export const okStatus = () => ({
  type: OK_STATUS
});