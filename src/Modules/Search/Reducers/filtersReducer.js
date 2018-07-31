import { UPDATE_FILTERS } from '../actionTypes';

import { filters } from '../constants';

const positionsReducer = (state = filters, action) => {
  switch (action.type) {
    case (UPDATE_FILTERS):
      return ({
        name: action.filters.name,
        position: action.filters.position,
        age: action.filters.age
      })
    default:
      return state;
  }
}

export default positionsReducer;