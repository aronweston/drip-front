import {
  COFFEE_LIST_FAIL,
  COFFEE_LIST_REQUEST,
  COFFEE_LIST_SUCCESS,
  COFFEE_SINGLE_FAIL,
  COFFEE_SINGLE_REQUEST,
  COFFEE_SINGLE_SUCCESS,
} from '../constants/coffeeConstants';

export const coffeeListReducer = (state = {}, action) => {
  switch (action.type) {
    case COFFEE_LIST_REQUEST:
      return { loading: true, coffee: {} };
    case COFFEE_LIST_SUCCESS:
      return { loading: false, success: true, coffee: action.payload };
    case COFFEE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const coffeeSingleReducer = (state = {}, action) => {
  switch (action.type) {
    case COFFEE_SINGLE_REQUEST:
      return { loading: true, coffee: {} };
    case COFFEE_SINGLE_SUCCESS:
      return { loading: false, success: true, coffee: action.payload };
    case COFFEE_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
