import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Styles';
import { removeFromCart, addTotalPrice } from '../actions/cartActions';
import { useHistory } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const login = useSelector((state) => state.login);
  const { user } = login;
  const { cartItems } = cart;
  let history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    //no user, price to $0
    if (!user) {
      setTotalPrice(0);
    }

    //if the user is logged in, show them their cart price
    if (user && cartItems) {
      const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
      setTotalPrice(total);
    }
  }, [user, cart]);

  const checkout = () => {
    if (totalPrice > 0)
      if (cartItems.length > 0) {
        const price = dispatch(addTotalPrice(totalPrice));
        if (price) {
          history.push('/checkout');
        }
      }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
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
                <a onClick={() => removeItem(item._id)}>Remove</a>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={checkout}
        className='bg-red-500 p-4 rounded w-full text-white sticky bottom-0'>
        Checkout • Subtotal: ${totalPrice}
      </button>
    </div>
  );
};

export default Cart;
