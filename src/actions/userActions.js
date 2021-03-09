import axios from 'axios';
import API from '../config/api';
import {
  configNoAuth,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

// @desc Register user
// @route POST /user/register
// @access PUBLIC
export const register = (name, email, password) => async (dispatch) => {
  try {
    //define dispatch request
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    //post request to register the user
    const { data } = await axios.post(
      `${API}/users/register`,
      { name, email, password },
      configNoAuth
    );

    //defined success result to send the payload data to global user state
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    //set user data to local storage
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// @desc Login user
// @route POST /user/login
// @access PUBLIC

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(
      `${API}/users/login`,
      { email, password },
      configNoAuth
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// @desc Logout user
// @route
// @access PUBLIC
export const logout = () => async (dispatch) => {
  //Remove the user from local storage for no
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem('user');
};

export default { logout };
