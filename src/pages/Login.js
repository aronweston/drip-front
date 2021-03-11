import React, { useState, useEffect } from 'react';
import { Container, Loader, Error } from '../components/Styles';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/userActions';
import { Helmet } from 'react-helmet';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);

  const { loading, error, success, user } = loginState;

  useEffect(() => {
    if (user && success) {
      history.push('');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Helmet>
        <title>Login | drip </title>
      </Helmet>
      <Container>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
          <h1 className='text-3xl pt-5 pb-5 font-bold'>Login</h1>
          {loading && <Loader>Loading...</Loader>}
          {error && <Error>{error}</Error>}
          <form onSubmit={handleSubmit}>
            <div className='-mx-3 md:flex mb-6'>
              <div className='md:w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
                  for='grid-password'>
                  Email
                </label>
                <input
                  className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
                  id='grid-password'
                  type='email'
                  placeholder='Email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <p className='text-grey-dark text-xs italic'></p>
              </div>
            </div>
            <div className='-mx-3 md:flex mb-6'>
              <div className='md:w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
                  for='grid-password'>
                  Password
                </label>
                <input
                  className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
                  id='grid-password'
                  type='password'
                  placeholder='************'
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <p className='text-grey-dark text-xs italic'></p>
              </div>
            </div>
            <button className='bg-green-900 py-3 px-4 mb-3 rounded text-white'>
              Login
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
