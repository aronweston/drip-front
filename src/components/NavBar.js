import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
          <NavLink
            activeClassName='text-red'
            className='inline-flex items-center py-1 px-1 my-3 text-white'
            to='/login'>
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
