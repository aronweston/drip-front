import {
  CART_ADD_DELIVERY,
  CART_ADD_ITEM,
  CART_ADD_TOTAL_PRICE,
  CART_CLEAR_ALL_ITEMS,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants';
import {
  ORDER_ADD_DELIVERY_FAIL,
  ORDER_ADD_DELIVERY_REQUEST,
  ORDER_ADD_DELIVERY_SUCCESS,
} from '../constants/orderConstants';

export const addToCart = (cartItems) => async (dispatch, getState) => {
  if (getState().login.user) {
    dispatch({
      type: CART_ADD_ITEM,
      payload: cartItems,
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const addTotalPrice = (totalPrice) => async (dispatch) => {
  dispatch({
    type: CART_ADD_TOTAL_PRICE,
    payload: totalPrice,
  });
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
};

export const clearCart = () => async (dispatch) => {
  dispatch({
    type: CART_CLEAR_ALL_ITEMS,
  });
  localStorage.removeItem('cartItems');
  localStorage.removeItem('totalPrice');
};
