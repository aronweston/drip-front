import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const Logo = function () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='white'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
      />
    </svg>
  );
};

const UserCircle = ({ width }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      viewBox='0 0 20 20'
      fill='#fff'>
      <path
        fillRule='evenodd'
        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
        clipRule='evenodd'
      />
    </svg>
  );
};

const LogoutIcon = ({ width }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={width}
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
      />
    </svg>
  );
};

const LoginIcon = ({ width }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={width}
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
      />
    </svg>
  );
};

const CartIcon = ({ width }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={width}
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
      />
    </svg>
  );
};

const NavBar = ({ history }) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  useEffect(() => {
    if (!login) {
      history.push('/login');
    }
  }, [login]);

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <header className='bg-gray-900'>
      <div className='container mx-auto flex justify-between'>
        <NavLink
          activeClassName='text-white'
          className='inline-flex items-center py-1 px-1 my-3 text-white'
          to='/'>
          drip
          <Logo />
        </NavLink>
        <nav className='flex'>
          {/* <NavLink
            activeClassName='text-red'
            className='inline-flex items-center py-1 px-1 my-3 text-white'
            to='/landing'>
            Landing
          </NavLink>
          <NavLink
            activeClassName='text-red'
            className='inline-flex items-center py-1 px-1 my-3 text-white'
            to='/checkout'>
            Checkout
          </NavLink> */}
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
                className='inline-flex items-center py-1 px-5 my-3 mx-3 text-black bg-white rounded'
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
            <CartIcon width='35px' />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
