import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const items = action.payload;
      return { cartItems: [...state.cartItems, items] };
    default:
      return state;
  }
};
