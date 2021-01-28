import { FAILURE, REQUEST, SUCCESS } from './types';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true
      }
    case SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state;
  }
};