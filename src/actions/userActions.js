import axios from 'axios';

import {
  configNoAuth,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

// @desc Register user
// @route POST /user/register
// @access PUBLIC
export const userRegister = (name, email, password) => async (dispatch) => {
  try {
    //define dispatch request
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    //post request to register the user
    const { data } = await axios.post(
      `${URL}/users/register`,
      { name, email, password },
      configNoAuth
    );

    //defined success result to send the payload data to global user state
    dispatch({
      type: USER_REGISTER_SUCCESS,
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

// export const login = (email, password) = async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_LOGIN_REQUEST,
//     });

//     const { data } = axios.post('');
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload: error,
//     });
//   }
// });
