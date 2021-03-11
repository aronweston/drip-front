import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StripeForm from './StripeForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51IQKncEXawQ3zSFqMyx5IgXbNgO3Vg5TpH5vSibV6Y7StRyLz5zjQahBy6G09k9RYdbUoe838y5fVESIsNeZtSwf00y5IUe2ke'
);

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, totalPrice } = cart;

  return (
    <main className='flex flex-wrap overflow-hidden'>
      <section className='w-2/3 overflow-hidden'>
        <Elements stripe={stripePromise}>
          <StripeForm />
        </Elements>
      </section>
      <section className='w-1/3 overflow-auto bg-red-700 h-100 y-offset-66.95'>
        {cartItems.length === 0 && <h2>Your cart is empty</h2>}
        {cartItems &&
          cartItems.map((item) => (
            <div className='flex row pt-2 pb-2'>
              <img className='w-5/12 ' src={item.img} />
              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.qty}</p>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Checkout;
