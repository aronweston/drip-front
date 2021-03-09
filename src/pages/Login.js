import React, { useState, useEffect } from 'react';
import { Container } from '../components/Styles';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    //TODO: login action to dispatch to the backend and login the user
    //POST /user/login
  };

  return (
    <>
      <Container>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
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
      </Container>
    </>
  );
};

export default Login;
