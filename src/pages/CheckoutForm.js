import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export const CheckoutForm = ({ history }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);

  const id = '6045c6e02213ec9afb48718c';

  const getSecret = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/order/pay/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const onSuccess = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/order/success', {
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
          history.push(`/order/success/${order._id}`);
        }
      } else {
        console.log('fail');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe}>
        Pay
      </button>
      {error && <h3>{error.message}</h3>}
    </form>
  );
};

export default CheckoutForm;
