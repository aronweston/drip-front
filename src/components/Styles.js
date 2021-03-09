import React from 'react';

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

export const Hero = ({ title, colour }) => {
  return (
    <section className='container max-w-screen-large mx-auto mb-auto container py-20 bg-gray-900'>
      <h1>Title</h1>
    </section>
  );
};

// export default {
//   Container,
//   ProductCard,
//   Error,
//   ProductGrid,
//   PlusButton,
//   MinusCircle,
// };
