import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { login } from '../actions/userActions';

//Container
export const Container = ({ children }) => {
  return (
    <main className='h-screen overflow-hidden flex items-center justify-center'>
      {children}
    </main>
  );
};

//Card
export const ProductCard = ({ imgSrc, headerText, productInfo }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={imgSrc} alt='' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          {headerText}
        </div>
        <span>{productInfo}</span>
      </div>
    </div>
  );
};

//Form
export const Form = () => {
  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
      <div className='-mx-3 md:flex mb-6'>
        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
            for='grid-first-name'>
            First Name
          </label>
          <input
            className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3'
            id='grid-first-name'
            type='text'
            placeholder='Jane'
          />
          <p className='text-red text-xs italic'>Please fill out this field.</p>
        </div>
        <div className='md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
            for='grid-last-name'>
            Last Name
          </label>
          <input
            className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
            id='grid-last-name'
            type='text'
            placeholder='Doe'
          />
        </div>
      </div>
      <div className='-mx-3 md:flex mb-6'>
        <div className='md:w-full px-3'>
          <label
            className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
            for='grid-password'>
            Password
          </label>
          <input
            className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
            id='grid-password'
            type='password'
            placeholder='******************'
          />
          <p className='text-grey-dark text-xs italic'>
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className='-mx-3 md:flex mb-2'>
        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
            for='grid-city'>
            City
          </label>
          <input
            className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
            id='grid-city'
            type='text'
            placeholder='Albuquerque'
          />
        </div>
        <div className='md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
            for='grid-state'>
            State
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded'
              id='grid-state'>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className='pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker'>
              <svg
                className='h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
            for='grid-zip'>
            Zip
          </label>
          <input
            className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
            id='grid-zip'
            type='text'
            placeholder='90210'
          />
        </div>
      </div>
    </div>
  );
};

export const Error = ({ children }) => {
  return (
    <div className='-mx-3 md:flex mb-6 text-center bg-red-400 rounded py-3 px-4 mb-3 text-white'>
      {children}
    </div>
  );
};

export const Loader = ({ children }) => {
  return (
    <div className='-mx-3 md:flex mb-6 text-center bg-green-400 rounded py-3 px-4 mb-3 text-white'>
      {children}
    </div>
  );
};

export const ProductGrid = ({ children }) => {
  return (
    <main class='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
      {children}
    </main>
  );
};

export const QtyButton = ({ el, width, disabled, onClick }) => {
  if (el === 'plus') {
    return (
      <button disabled={disabled} onClick={onClick}>
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
            d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button disabled={disabled} onClick={onClick}>
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
            d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
    );
  }
};

export const Button = ({ bg, txtColour, text, to }) => {
  return (
    <Link to={to}>
      <button
        className={`inline-flex items-center py-1 px-5 my-4 mx-0 text-${txtColour} bg-${bg} rounded text-m lowercase`}>
        {text}
      </button>
    </Link>
  );
};

export const Hero = ({ title, colour }) => {
  const login = useSelector((state) => state.login);

  return (
    <section className='max-w-screen-large mb-auto py-20 bg-gray-900'>
      <div className='container text-left text-white mx-auto p-10'>
        {login.user ? (
          <>
            <h1 className='text-4xl pb-5'>Hey {login.user.name}</h1>
            <p>
              <p>Welcome to Drip.</p>
              <p>
                Subscription coffee from quality local roasters, <br></br>all
                around Australia.
              </p>
            </p>
          </>
        ) : (
          <>
            <h1 className='text-4xl'>Drip Coffee Co</h1>
            <p>Subscription coffee. Always fresh.</p>{' '}
          </>
        )}

        <Button to='/signup' txtColour='black' bg='white' text='Get Started' />
      </div>
    </section>
  );
};

export const Logo = function () {
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

export const UserCircle = ({ width }) => {
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

export const LogoutIcon = ({ width }) => {
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

export const LoginIcon = ({ width }) => {
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

export const CartIcon = ({ width }) => {
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

export const SubscriptionIcon = ({ width }) => {
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
        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
      />
    </svg>
  );
};

export const DripLogo = ({ width }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      ariaHidden='true'
      className='svg-inline--fa fa-tint fa-w-11'
      data-icon='tint'
      stroke='#fff'
      width={width}
      data-prefix='fas'
      viewBox='0 0 352 512'>
      <path
        fill='currentColor'
        d='M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z'></path>
    </svg>
  );
};

//logo
//user
//logout
//login
