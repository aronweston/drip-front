import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../actions/cartActions';

const OrderSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <div>
      <h1>Order Successful</h1>
    </div>
  );
};

export default OrderSuccess;
