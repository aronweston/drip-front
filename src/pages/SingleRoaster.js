import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Loader, ProductCard } from '../components/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleRoaster } from '../actions/roasterActions';

const SingleCoffee = ({ history }) => {
  const dispatch = useDispatch();
  const singleRoaster = useSelector((state) => state.singleRoaster);
  const { roaster, loading, success } = singleRoaster;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleRoaster(id));
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          {roaster && roaster.name}//{roaster.location}
        </title>
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
