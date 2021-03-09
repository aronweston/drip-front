import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

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
          Home
        </NavLink>
        <nav className='flex'>
          <NavLink
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
          </NavLink>
          {login.user ? (
            <>
              <NavLink
                activeClassName='text-red'
                className='inline-flex items-center py-1 px-1 my-3 text-white'
                to='/profile'>
                Profile
              </NavLink>
              <span
                onClick={handleLogoutClick}
                activeClassName='text-red'
                className='inline-flex items-center py-1 px-1 my-3 text-white'>
                Logout
              </span>
            </>
          ) : (
            <>
              <NavLink
                activeClassName='text-red'
                className='inline-flex items-center py-1 px-1 my-3 text-white'
                to='/login'>
                Login
              </NavLink>
              <NavLink
                activeClassName='text-red'
                className='inline-flex items-center py-1 px-1 my-3 text-white'
                to='/register'>
                Sign Up
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
