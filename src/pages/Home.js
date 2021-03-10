import React from 'react';
import { Container, Hero, Loader, ProductCard } from '../components/Styles';
import { useSelector, useDispatch } from 'react-redux';
import AllCoffee from './AllCoffee';
import Cart from '../components/Cart';

const Home = () => {
  const coffee = useSelector((state) => state.allCoffee);
  const { loading, error } = coffee;
  return (
    <>
      {loading && <Loader>Getting you caffeinated...</Loader>}
      {/* <Cart /> */}
      <Hero />
      <AllCoffee />
    </>
  );
};

export default Home;
