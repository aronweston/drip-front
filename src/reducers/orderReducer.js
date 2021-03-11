import {
  ORDER_ADD_DELIVERY_FAIL,
  ORDER_ADD_DELIVERY_REQUEST,
  ORDER_ADD_DELIVERY_SUCCESS,
  ORDER_CONFIRM_FAIL,
  ORDER_CONFIRM_REQUEST,
  ORDER_CONFIRM_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_GET_SECRET_FAIL,
  ORDER_GET_SECRET_REQUEST,
  ORDER_GET_SECRET_SUCCESS,
} from '../constants/orderConstants';

export const stripeSecretReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_GET_SECRET_REQUEST:
      return { loading: true, stripe: {} };
    case ORDER_GET_SECRET_SUCCESS:
      return { loading: false, success: true, secret: action.payload };
    case ORDER_GET_SECRET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createOrderReducer = (
  state = { order: {}, delivery: {} },
  action
) => {
  switch (action.type) {
    case ORDER_ADD_DELIVERY_REQUEST:
      return { loading: true, order: {} };
    case ORDER_ADD_DELIVERY_SUCCESS:
      return { loading: true, delivery: action.payload };
    case ORDER_ADD_DELIVERY_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: true, order: action.payload };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const confirmedOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CONFIRM_REQUEST:
      return { loading: true, order: {} };
    case ORDER_CONFIRM_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_CONFIRM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
