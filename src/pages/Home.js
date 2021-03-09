import React from 'react';
import { Container, Hero, Loader, ProductCard } from '../components/Styles';
import { useSelector, useDispatch } from 'react-redux';
import AllCoffee from './AllCoffee';

const Home = () => {
  const coffee = useSelector((state) => state.allCoffee);
  const { loading, error } = coffee;

  return (
    <div>
      {loading && <Loader>Getting you caffeinated...</Loader>}
      <Hero />
      <AllCoffee />
    </div>
  );
};

export default Home;
