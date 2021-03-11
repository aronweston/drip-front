import React, { useState } from 'react';
import { addToCart } from '../actions/cartActions';
import { QtyButton } from '../components/Styles';
import { useDispatch } from 'react-redux';
const CoffeeCard = ({ coffee }) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(0);
  //trick: qty can't be negative or can't be higher than the amount currently in stock
  const handleAddToCart = () => {
    if (qty < coffee.stockQty) {
      const cartItems = {
        coffee: coffee._id,
        qty: qty,
        name: coffee.title,
        price: coffee.price,
        img: coffee.image,
      };

      dispatch(addToCart(cartItems));
    } else {
      console.log('reached');
    }
  };

  return (
    <section>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img
          className='w-full'
          src={coffee.image ? coffee.image : ''}
          alt={`${coffee.title} by ${coffee.roaster.name}`}
        />
        <div class='px-6 py-4'>
          <a href={`/coffee/${coffee._id}`}>
            <div class='font-bold text-xl mb-2'>{coffee.title}</div>
          </a>

          <div className='flex pt-2 pb-2'>
            <span class='text-gray-700 text-base pr-2'>${coffee.price}</span>
            <span class='text-gray-700 text-base pr-2'>{coffee.grams}g</span>
            <a
              href={`/roaster/${coffee.roaster._id}`}
              class='text-gray-700 text-base'>
              {coffee.roaster.name}
            </a>
          </div>
          <p class='text-gray-700 text-base'>
            {`${coffee.description.substring(0, 250)}...`}
          </p>

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

          <p className='pt-3'>
            {coffee.tastesLike.map((taste) => (
              <p class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #{taste}
              </p>
            ))}
          </p>
        </div>

        {/* <img
          src={coffee.roaster.logo ? coffee.roaster.logo : ''}
          alt={`The logo for ${coffee.roaster.name}`}
        /> */}
      </div>
    </section>
  );
};

export default CoffeeCard;
