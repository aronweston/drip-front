import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Delivery from './Delivery';
import StripeForm from './StripeForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // const [billing, setBilling] = useState({});

  const { cartItems, totalPrice } = cart;
  const getDeliveryDetails = () => {};

  return (
    <main className='flex flex-wrap overflow-hidden'>
      <section className='w-2/3 overflow-hidden'>
        <Delivery onSubmit={getDeliveryDetails} />
        <Elements stripe={stripePromise}>
          <StripeForm />
        </Elements>
      </section>
      <section className='w-1/3 overflow-hidden bg-red-700 h-screen'>
        {cartItems.length === 0 && <h2>Your cart is empty</h2>}
        {cartItems &&
          cartItems.map((item) => (
            <div className='flex row pt-2 pb-2'>
              <img className='w-5/12 ' src={item.img} />
              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.qty}</p>
                {/* <a onClick={() => removeItem(item._id)}>Remove</a> */}
              </div>
            </div>
          ))}
        <button
          // onClick={checkout}
          className='bg-red-500 p-4 rounded w-full text-white bottom-0'>
          Pay Now • ${totalPrice}
        </button>
      </section>
    </main>
  );
};

export default Checkout;
