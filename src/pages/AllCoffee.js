import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoffee } from '../actions/coffeeActions';

const AllCoffee = ({ history }) => {
  const dispatch = useDispatch();
  const allCoffee = useSelector((state) => state.allCoffee);
  const { coffee, loading, success } = allCoffee;

  useEffect(() => {
    dispatch(getAllCoffee());
  }, []);

  return (
    <div>
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

export default AllCoffee;
