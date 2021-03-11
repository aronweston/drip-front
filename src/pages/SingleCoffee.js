import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  CoffeeLoader,
  Container,
  Loader,
  ProductCard,
  QtyButton,
} from '../components/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCoffee } from '../actions/coffeeActions';
import { addToCart } from '../actions/cartActions';

const SingleCoffee = ({ history }) => {
  const dispatch = useDispatch();
  const singleCoffee = useSelector((state) => state.singleCoffee);
  const { coffee, loading, success } = singleCoffee;
  const { id } = useParams();
  const [qty, setQty] = useState(0);

  const handleAddToCart = () => {
    if (qty < coffee.stockQty) {
      const cartItems = {
        coffee: coffee._id,
        qty: qty,
        name: coffee.title,
        price: coffee.price,
        img: coffee.image,
      };
      console.log(cartItems);
      dispatch(addToCart(cartItems));
    } else {
      console.log('reached');
    }
  };

  useEffect(() => {
    dispatch(getSingleCoffee(id));
  }, []);

  return (
    <>
      <Helmet>
        <title>{coffee && coffee.title}</title>
      </Helmet>

      <div className='main-top'>
        {loading && (
          <CoffeeLoader>
            Hold tight, can't talk until you've had your coffee
          </CoffeeLoader>
        )}
      </div>
      {coffee && (
        <main className='text-black main-top flex flex-wrap overflow-hidden height-full m-10'>
          <div className='w-1/2 pb-10 justify-center'>
            <img
              className='w-3/4 justify-center ml-20'
              src={coffee.image ? coffee.image : ''}
              alt={coffee.title}
            />
          </div>
          <div className='w-1/2 overflow-hidden px-10 '>
            <div className='mt-10'>
              <h1 className='text-4xl font-bold pb-5'>{coffee.title}</h1>
              <div className='flex pt-2 pb-2'>
                <span class='text-gray-700 text-base pr-2'>
                  ${coffee.price}
                </span>
                <span class='text-gray-700 text-base pr-2'>
                  {coffee.grams}g
                </span>
              </div>
              <p class='text-gray-700 text-base'>{`${coffee.description}`}</p>

              <div className='flex item-center justify-between mt-3'>
                <div className='inline-flex'>
                  {coffee.stockQty <= 0 ? (
                    <span className='px-3 py-2 text-white text-xs font-bold uppercase rounded bg-red-200'>
                      OUT OF STOCK
                    </span>
                  ) : (
                    <>
                      <span className='mr-2 p-0 inline-block leading-{0}'>
                        {qty}
                      </span>
                      <QtyButton
                        el='plus'
                        disabled={qty >= coffee.stockQty}
                        onClick={() => setQty(qty + 1)}
                        width='20px'
                      />
                      <QtyButton
                        el='minus'
                        disabled={qty === 0}
                        onClick={() => setQty(qty - 1)}
                        width='20px'
                      />
                    </>
                  )}
                </div>

                <button
                  className='px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded'
                  disabled={qty < 1}
                  onClick={handleAddToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          {/* <span>{coffee.roaster.name}</span> */}
          {/* <img src={coffee.roaster.logo ? coffee.roaster.logo : ''} alt='' /> */}
        </main>
      )}
    </>
  );
};

export default SingleCoffee;
