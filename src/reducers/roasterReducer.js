import {
  ROASTER_SINGLE_FAIL,
  ROASTER_SINGLE_REQUEST,
  ROASTER_SINGLE_SUCCESS,
} from '../constants/roasterConstants';

// export const coffeeListReducer = (state = {}, action) => {
//   switch (action.type) {
//     case COFFEE_LIST_REQUEST:
//       return { loading: true, coffee: {} };
//     case COFFEE_LIST_SUCCESS:
//       return { loading: false, success: true, coffee: action.payload };
//     case COFFEE_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

export const roasterSingleReducer = (state = {}, action) => {
  switch (action.type) {
    case ROASTER_SINGLE_REQUEST:
      return { loading: true, roaster: {} };
    case ROASTER_SINGLE_SUCCESS:
      return { loading: false, success: true, coffee: action.payload };
    case ROASTER_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
