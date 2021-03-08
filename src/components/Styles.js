import React from 'react';

//Container
export const Container = ({ children }) => {
  return <main className='relative flex justify-center'>{children}</main>;
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

export default { Container, ProductCard };
