import axios from 'axios';
import API from '../config/api';
import {
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
  ORDER_STRIPE_PAY_REQUEST,
} from '../constants/orderConstants';

export const createOrder = (delivery, cartItems, totalPrice) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ORDER_ADD_DELIVERY_SUCCESS,
      payload: delivery,
    });

    // localStorage.setItem('delivery', JSON.stringify(delivery));

    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    let token = getState().login.user.token;
    const auth = {
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `${API}/order`,
      { delivery, cartItems, totalPrice },
      auth
    );

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });

    //GET ORDER SECRET
    dispatch({
      type: ORDER_GET_SECRET_REQUEST,
    });
    const id = getState().order.order._id;
    const secret = await axios.get(`${API}/order/pay/${id}`);

    dispatch({
      type: ORDER_GET_SECRET_SUCCESS,
      payload: secret.data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });

    dispatch({
      type: ORDER_GET_SECRET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const payOrder = () => async (dispatch, getState) => {
  try {
    //CONFIRM ORDER
    dispatch({
      type: ORDER_CONFIRM_REQUEST,
    });

    let token = getState().login.user.token;

    const auth = {
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: `Bearer ${token}`,
      },
    };

    const id = getState().order.order._id;

    const { data } = await axios.post(`${API}/order/success`, { id }, auth);

    dispatch({
      type: ORDER_CONFIRM_SUCCESS,
      payload: data,
    });

    localStorage.setItem('confirmedOrder', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ORDER_CONFIRM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
