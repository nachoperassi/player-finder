import { UPDATE_FILTERS } from '../actionTypes';

import { filters } from '../constants';

const filtersReducer = (state = filters, action) => {
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

export default filtersReducer;