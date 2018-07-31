import { LOAD_POSITIONS } from '../actionTypes';

const positionsReducer = (state = [], action) => {
  switch (action.type) {
    case (LOAD_POSITIONS):
      return action.positions
    default:
      return state;
  }
}

export default positionsReducer;