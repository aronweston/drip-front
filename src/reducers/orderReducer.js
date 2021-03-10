import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from '../constants/orderConstants';

// export const stripeSecretReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ORDER_GET_SECRET_REQUEST:
//       return { loading: true, secret: {} };
//     case ORDER_GET_SECRET_SUCCESS:
//       return { loading: false, success: true, secret: action.payload };
//     case ORDER_GET_SECRET_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

export const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true, order: {} };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
