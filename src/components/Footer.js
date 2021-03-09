import React from 'react';

const Footer = () => {
  return (
    <footer className='py-6 wrapper max-w-screen-lg container mx-auto bg-gray-900 text-white'>
      <div className='flex items-center py-10'>
        <div className='footer-logo flex-1'>
          <a href='/'>
            <h1>drip</h1>
          </a>
        </div>

        <div className='footer-item flex-1'>
          <ul>
            <li className='title'>
              <a href='/products/tile-surfaces/porcelain/large-format-tiles/'>
                Tile range
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-item flex-1'>
          <ul>
            <li className='title'>
              <a href='/products/bathroom-products/above-and-below-basins/ceramic/'>
                Bathroom Products
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-item flex-1'>
          <ul>
            <li className='title'>
              <a href='/company'>Info</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='copyright container mx-auto flex justify-between'>
        <div className='left flex-start'>© 2020, Amalfi Tiles</div>
        <div className='right flex-end'>
          <a target='_blank' href='https://www.instagram.com/amalfi.tiles/'>
            <i className='fab fa-instagram'></i>
          </a>
          <a
            target='_blank'
            href='https://www.facebook.com/amalfitileskingsford/'>
            <i className='fab fa-facebook'></i>
          </a>
          <a
            target='_blank'
            href='https://www.facebook.com/amalfitileskingsford/'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
