import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(
  'pk_test_51IQKncEXawQ3zSFqMyx5IgXbNgO3Vg5TpH5vSibV6Y7StRyLz5zjQahBy6G09k9RYdbUoe838y5fVESIsNeZtSwf00y5IUe2ke'
);

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
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        {/* <input type='email' placeholder='input email' /> */}
        <button type='submit' disabled={!stripe}>
          Pay
        </button>
        {error && <h3>{error.message}</h3>}
      </form>
    </Elements>
  );
};

export default CheckoutForm;
