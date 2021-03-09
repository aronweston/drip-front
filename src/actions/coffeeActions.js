import axios from 'axios';
import API from '../config/api';
import {
  COFFEE_LIST_REQUEST,
  COFFEE_LIST_SUCCESS,
  COFFEE_LIST_FAIL,
  COFFEE_SINGLE_REQUEST,
  COFFEE_SINGLE_SUCCESS,
  COFFEE_SINGLE_FAIL,
} from '../constants/coffeeConstants';

export const getAllCoffee = () => async (dispatch) => {
  try {
    dispatch({
      type: COFFEE_LIST_REQUEST,
    });

    const { data } = await axios.get(`${API}/coffee`);

    dispatch({
      type: COFFEE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COFFEE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const getSingleCoffee = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COFFEE_SINGLE_REQUEST,
    });

    const { data } = await axios.get(`${API}/coffee/${id}`);

    dispatch({
      type: COFFEE_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COFFEE_SINGLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
