import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import API from '../config/api';

export const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const cart = useSelector((state) => state.cart);
  // const order = useSelector((state) => state.order);

  if (cart.delivery) {
    const { cartItems, delivery, totalPrice } = cart;
  }
  useEffect(() => {}, []);

  //dispatch the form data with the delivery data to set it as global state
  //dispatch a order with the cart data from global state
  //
  const id = '123';

  const getSecret = async () => {
    try {
      const { data } = await axios.get(`${API}/order/pay/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const onSuccess = async () => {
    try {
      const { data } = await axios.post(`${API}/order/success`, {
        id: id,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const clientSecret = await getSecret();
    if (!clientSecret) {
      console.log('client secret not found');
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      console.log(error);
      setError(error);
    } else {
      if (paymentIntent.status === 'succeeded') {
        //redirect to the order confirmation page or the orders section of their profile
        const order = onSuccess();
        if (order) {
          console.log(order);
          // history.push(`/order/success/${order._id}`);
        }
      } else {
        console.log('fail');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        disabled={!stripe}
        className='bg-red-500 p-4 w-full text-white sticky bottom-0'>
        {/* Pay Now • ${totalPrice} */} Pay Now
      </button>
      {error && <h3>{error.message}</h3>}
    </form>
  );
};

export default StripeForm;
