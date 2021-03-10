import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Styles';

const Cart = () => {
  // const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const login = useSelector((state) => state.login);
  const { user } = login;
  const { cartItems } = cart;

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!user) {
      console.log('no user');
    }

    if (cartItems) {
      const total = cartItems.reduce((acc, price) => acc + price);
      console.log(total);
    }
  }, []);
  const removeItem = () => {
    // dispatch(removeItem());
  };

  return (
    <div className='inset-y-69.96 right-5 bg-white fixed rounded shadow-lg h-4/5 w-2/5 overflow-auto'>
      <div className='relative flex flex-col p-4'>
        {!user && <h2>Login or sign up to purchase coffees</h2>}
        {cartItems.length === 0 && <h2>Your cart is empty</h2>}
        {user &&
          cart.cartItems &&
          cart.cartItems.map((item) => (
            <div className='flex row pt-2 pb-2'>
              <img className='w-5/12 ' src={item.img} />
              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.qty}</p>
                <span onClick={removeItem}>Remove</span>
              </div>
            </div>
          ))}
      </div>
      <button className='bg-red-500 p-4 rounded w-full text-white sticky bottom-0'>
        Checkout • Subtotal: ${totalPrice}
      </button>
    </div>
  );
};

export default Cart;
