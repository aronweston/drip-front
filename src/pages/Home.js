import React from 'react';
import { Container, Loader, ProductCard } from '../components/Styles';
import { useSelector, useDispatch } from 'react-redux';
import AllCoffee from './AllCoffee';

const Home = () => {
  const coffee = useSelector((state) => state.allCoffee);
  const { loading, error } = coffee;

  return (
    <div>
      {loading && <Loader>Getting you caffeinated...</Loader>}
      <AllCoffee />
    </div>
  );
};

export default Home;
