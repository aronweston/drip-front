import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ match }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  // const [product, setProduct] = useState({
  //   name: 'Test Product',
  //   price: 10,
  //   productBy: 'Roaster X',
  // });

  const getSecret = async () => {
    try {
      //pass in params into the route that will be /order/pay/:id
      const res = await axios.get('http://localhost:5000/order/pay');
      const secret = res.data.client_secret;
      console.log(secret);
      return secret;
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
      console.log(error.message);
      setError(error);
    } else {
      if (paymentIntent.status === 'succeeded') {
        //redirect to the order confirmation page or the orders section of their profile
        console.log('success');
        console.log(paymentIntent);
      } else {
        console.log('fail');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {/* <input type='email' placeholder='input email' /> */}
      <button type='submit' disabled={!stripe}>
        Pay
      </button>
      {error && <h3>{error.message}</h3>}
    </form>
  );
};

export default CheckoutForm;
