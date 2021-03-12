import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../actions/cartActions';
import { Container, GreenTick } from '../components/Styles';

const OrderSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <>
      <Helmet>
        <title>Order Success |</title>
      </Helmet>
      <main className='text-black main-top flex flex-wrap overflow-hidden height-full m-10'>
        <Container>
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
            <h1 className='text-3xl pt-5 pb-5 font-bold'>Order Success</h1>

            <div className='-mx-3 md:flex mb-6'>
              <GreenTick width='35px' />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default OrderSuccess;
