import React, { useState, useEffect } from 'react';
import { Container, Error, Loader } from '../components/Styles';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import { Helmet } from 'react-helmet';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerState = useSelector((state) => state.register);
  const { error, loading, success, user } = registerState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && success) {
      history.push('/');
    }
  }, [user, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | drip </title>
      </Helmet>
      <Container>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
          {loading && <Loader>Loading...</Loader>}
          {error && <Error>{error}</Error>}
          <div className='-mx-3 md:flex mb-6'>
            <div className='md:w-full px-3'>
              <label
                className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
                htmlFor='register-first-name'>
                First Name
              </label>
              <input
                className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
                id='register-first-name'
                name='register-first-name'
                type='text'
                placeholder='Enter your name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <p className='text-grey-dark text-xs italic'></p>
            </div>
          </div>
          <div className='-mx-3 md:flex mb-6'>
            <div className='md:w-full px-3'>
              <label
                className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
                htmlFor='register-password'>
                Email
              </label>
              <input
                className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
                id='register-email'
                name='register-email'
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
                htmlFor='register-password'>
                Password
              </label>
              <input
                className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
                id='register-password'
                name='register-password'
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
            Sign Up
          </button>
        </form>
      </Container>
    </>
  );
};

export default Register;
