import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StripeForm from './StripeForm';
import { Elements } from '@stripe/react-stripe-js';
import { Helmet } from 'react-helmet';

import { loadStripe } from '@stripe/stripe-js';
import Footer from '../components/Footer';

const stripePromise = loadStripe(
  'pk_test_51IQKncEXawQ3zSFqMyx5IgXbNgO3Vg5TpH5vSibV6Y7StRyLz5zjQahBy6G09k9RYdbUoe838y5fVESIsNeZtSwf00y5IUe2ke'
);

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, totalPrice } = cart;

  const title = '';
  return (
    <>
      <Helmet>
        <title>checkout | drip</title>
      </Helmet>
      <main className='flex flex-wrap overflow-hidden height-full'>
        <section className='w-2/3 overflow-auto height-full'>
          <Elements stripe={stripePromise}>
            <StripeForm />
          </Elements>
        </section>
        <section className='w-1/3 bg-red-700 height-full overflow-scroll'>
          <div className='overflow-y-auto p-5 text-white'>
            <h2 className='text-2xl font-bold pb-4'>Cart Summary.</h2>
            {cartItems.length === 0 && <h2>Your cart is empty</h2>}
            {cartItems &&
              cartItems.map((item) => (
                <div className='flex row pt-2 pb-2'>
                  <img className='w-5/12 pr-2' src={item.img} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.roaster}</p>
                    <p>${item.price}</p>
                    <p>Quantity: {item.qty}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
