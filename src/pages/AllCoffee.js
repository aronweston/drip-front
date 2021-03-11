import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoffee } from '../actions/coffeeActions';
import { ProductGrid, CoffeeLoader } from '../components/Styles';
import CoffeeCard from './CoffeeCard';

const AllCoffee = ({ history }) => {
  const dispatch = useDispatch();
  const allCoffee = useSelector((state) => state.allCoffee);
  const { coffee, loading, success } = allCoffee;

  useEffect(() => {
    dispatch(getAllCoffee());
  }, []);

  return (
    <>
      {loading && (
        <CoffeeLoader>On sec, getting you caffeinated...</CoffeeLoader>
      )}
      <ProductGrid>
        {success && coffee.map((coffee) => <CoffeeCard coffee={coffee} />)}
      </ProductGrid>
    </>
  );
};

export default AllCoffee;
