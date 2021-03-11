import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { logout } from '../actions/userActions';
import {
  UserCircle,
  LoginIcon,
  LogoutIcon,
  SubscriptionIcon,
  CartIcon,
  DripLogo,
} from '../components/Styles';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [cart, setCart] = useState(false);

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  const showCart = () => {
    if (!cart) {
      setCart(true);
    } else {
      setCart(false);
    }
  };

  return (
    <>
      <header className='bg-gray-900 fixed w-full top-0'>
        <div className='container mx-auto flex justify-between'>
          <NavLink
            activeClassName='text-white'
            className='inline-flex items-center py-1 px-1 my-3 text-white'
            to='/'>
            <DripLogo width='20px' />
          </NavLink>
          <nav className='flex'>
            {login.user ? (
              <>
                <NavLink
                  activeClassName='text-red'
                  className='inline-flex items-center py-1 px-1 my-3 text-white'
                  to='/profile'>
                  <UserCircle width='35px' />
                </NavLink>
                <span
                  onClick={handleLogoutClick}
                  activeClassName='text-red'
                  className='inline-flex items-center py-1 px-1 my-3 text-white'>
                  <LogoutIcon width='35px' />
                </span>
              </>
            ) : (
              <>
                <NavLink
                  activeClassName='text-red'
                  className='inline-flex items-center py-1 px-5 my-3 mx-3 text-black bg-white rounded font-bold'
                  to='/register'>
                  Sign Up
                </NavLink>
                <NavLink
                  activeClassName='text-red'
                  className='inline-flex items-center py-1 px-1 my-3 text-white'
                  to='/login'>
                  <LoginIcon width='35px' />
                </NavLink>
              </>
            )}
            <span
              activeClassName='text-red'
              className='inline-flex items-center py-1 px-1 my-3 text-white'>
              <SubscriptionIcon width='35px' />
            </span>
            <span
              onClick={() => showCart()}
              // onMouseEnter={() => setCart(true)}
              // onMouseLeave={() => setCart(false)}
              activeClassName='text-red'
              className='inline-flex items-center py-1 px-1 my-3 text-white'>
              <CartIcon width='35px' />
            </span>
          </nav>
        </div>
      </header>
      {cart && <Cart />}
    </>
  );
};

export default Header;
