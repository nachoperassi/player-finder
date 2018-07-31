import { RECEIVE_PLAYERS } from './actionTypes';

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players;
    default:
      return state;
  }
};

export default playersReducer;