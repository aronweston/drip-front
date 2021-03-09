import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Loader, ProductCard } from '../components/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCoffee } from '../actions/coffeeActions';

const SingleCoffee = ({ history }) => {
  const dispatch = useDispatch();
  const singleCoffee = useSelector((state) => state.singleCoffee);
  const { coffee, loading, success } = singleCoffee;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleCoffee(id));
  }, []);

  return (
    <div>
      {loading && <Loader>Getting you caffeinated...</Loader>}
      {success &&
        coffee.map((coffee) => (
          <div>
            <span>{coffee.title}</span>
            <img src={coffee.img ? coffee.img : ''} alt='' />
            <span>${coffee.price}</span>
            <span>{coffee.roaster.name}</span>
            <img src={coffee.roaster.logo ? coffee.roaster.logo : ''} alt='' />
          </div>
        ))}
    </div>
  );
};

export default SingleCoffee;
