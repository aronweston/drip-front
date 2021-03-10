import axios from 'axios';
import API from '../config/api';
import {
  CART_ADD_ITEM,
  CART_ADD_TOTAL_PRICE,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants';

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
  localStorage.getItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const addTotalPrice = (totalPrice) => async (dispatch) => {
  dispatch({
    type: CART_ADD_TOTAL_PRICE,
    payload: totalPrice,
  });
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
};
