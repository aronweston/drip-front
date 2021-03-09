import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoffee } from '../actions/coffeeActions';
import CoffeeCard from './CoffeeCard';

const AllCoffee = ({ history }) => {
  const dispatch = useDispatch();
  const allCoffee = useSelector((state) => state.allCoffee);
  const { coffee, loading, success } = allCoffee;

  useEffect(() => {
    dispatch(getAllCoffee());
  }, []);

  return (
    <main class='p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
      {success && coffee.map((coffee) => <CoffeeCard coffee={coffee} />)}
    </main>
  );
};

export default AllCoffee;
