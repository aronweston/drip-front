import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51IQKncEXawQ3zSFqMyx5IgXbNgO3Vg5TpH5vSibV6Y7StRyLz5zjQahBy6G09k9RYdbUoe838y5fVESIsNeZtSwf00y5IUe2ke'
);

const Home = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Home;
