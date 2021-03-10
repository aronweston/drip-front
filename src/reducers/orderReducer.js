import {
  ORDER_GET_SECRET_FAIL,
  ORDER_GET_SECRET_REQUEST,
  ORDER_GET_SECRET_SUCCESS,
} from '../constants/orderConstants';

export const stripeSecretReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_GET_SECRET_REQUEST:
      return { loading: true, secret: {} };
    case ORDER_GET_SECRET_SUCCESS:
      return { loading: false, success: true, secret: action.payload };
    case ORDER_GET_SECRET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
