import {
  CART_ADD_ITEM,
  CART_ADD_TOTAL_PRICE,
  CART_CLEAR_ALL_ITEMS,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], totalPrice: 0 },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const newItem = action.payload;
      console.log(newItem);
      //find the item and see if it exists
      const found = state.cartItems.find(
        (item) => item.coffee === newItem.coffee
      );
      if (found) {
        return { cartItems: [...state.cartItems] };
      } else {
        return { cartItems: [...state.cartItems, newItem] };
      }
    case CART_REMOVE_ITEM:
      const id = action.payload;
      const filter = state.cartItems.filter((item) => item.coffee !== id);
      return { cartItems: filter };
    case CART_ADD_TOTAL_PRICE:
      const price = action.payload;
      return { ...state, totalPrice: price };
    case CART_CLEAR_ALL_ITEMS:
      return { cartItems: [] };
    default:
      return state;
  }
};
