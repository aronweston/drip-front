import {
  ORDER_GET_SECRET_FAIL,
  ORDER_GET_SECRET_REQUEST,
  ORDER_GET_SECRET_SUCCESS,
} from '../constants/orderConstants';

//orderSuccess - post to order/success/:id
// / const onSuccess = async () => {
//   try {
//     const { data } = await axios.post(`${API}/order/success`, {
//       id: id,
//     });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getOrderSecret = async (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_GET_SECRET_REQUEST,
    });

    const { data } = await axios.get(`${API}/order/pay/${orderId}`);

    dispatch({
      type: ORDER_GET_SECRET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_GET_SECRET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
