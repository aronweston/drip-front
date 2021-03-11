import axios from 'axios';
import {
  ROASTER_SINGLE_FAIL,
  ROASTER_SINGLE_REQUEST,
  ROASTER_SINGLE_SUCCESS,
} from '../constants/roasterConstants';

export const getSingleRoaster = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ROASTER_SINGLE_REQUEST,
    });

    const { data } = await axios.get(`${API}/roasters/${id}`);

    dispatch({
      type: ROASTER_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROASTER_SINGLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
