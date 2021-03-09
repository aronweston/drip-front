import React from 'react';
import { Container, Loading, ProductCard } from '../components/Styles';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, user } = userRegister;

  console.log(user);

  return (
    <div>
      {loading ? <Loading></Loading> : user ? <h1>Hello World</h1> : null}

      {/* {loading ? <Loading>Loading...</Loading> :
        <ul>
          <h1>Hello {user.name}</h1>
          <li>{user.name}</li>
          <li>{user._id}</li>
          <li>{user.email}</li>
          <li>{user.stripeId}</li>
          <li>{user.password}</li>
          <li>{user.joined}</li>
        </ul>
      )} */}
    </div>
  );
};

export default Home;
