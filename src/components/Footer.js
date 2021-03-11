import React from 'react';
import { Link } from 'react-router-dom';
import { DripLogo } from './Styles';

const Footer = () => {
  return (
    <footer className='py-6 w-full bg-red-700 text-white text-center p-5'>
      <div className='flex justify-center'>
        <DripLogo width='20px' />
      </div>
      <nav className='m-5'>
        <Link to='/'>Shop • </Link>
        <Link to='/login'>Login • </Link>
        <Link to='/register'>Register • </Link>
        <Link to='/register'>Checkout </Link>
      </nav>
      <div className='mx-auto text-xs text-center'>© 2020, Drip Coffee Co.</div>
    </footer>
  );
};

export default Footer;
