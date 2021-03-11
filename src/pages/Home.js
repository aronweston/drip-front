import React from 'react';
import { Container, Hero, Loader, ProductCard } from '../components/Styles';
import { useSelector, useDispatch } from 'react-redux';
import AllCoffee from './AllCoffee';
import Cart from '../components/Cart';
import { Helmet } from 'react-helmet';

const Home = () => {
  const coffee = useSelector((state) => state.allCoffee);
  const { loading, error } = coffee;
  return (
    <>
      <Helmet>
        <title>Australian Subscription Coffee | drip </title>
      </Helmet>
      <Hero />
      <AllCoffee />
    </>
  );
};

export default Home;
