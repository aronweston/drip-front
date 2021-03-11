import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>{coffee && coffee.title}</title>
      </Helmet>
      {loading && <Loader>Getting you caffeinated...</Loader>}
      {/* {success &&
        coffee.map((c) => (
          <div>
            <span>{c.title}</span>
            <img src={c.img ? c.img : ''} alt='' />
            <span>${c.price}</span>
            <span>{c.roaster.name}</span>
            <img src={c.roaster.logo ? c.roaster.logo : ''} alt='' />
          </div>
        ))} */}
    </div>
  );
};

export default SingleCoffee;
