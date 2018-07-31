import { LOAD_STATUS, ERROR_STATUS, OK_STATUS } from './actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: ''
}

const statusReducer = (state = initialState, action) => {
  switch(action.type) {
    case (LOAD_STATUS):
      return ({
        isLoading: true,
        error: false
      })
    case (ERROR_STATUS):
      return ({
        isLoading: false,
        error: true,
        errorMessage: action.error
      })
    case (OK_STATUS):
      return ({
        isLoading: false,
        error: false
      })
    default:
      return state
  }
}

export default statusReducer;