import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Label,
  FormRow,
  Input,
  FormCol,
  Error,
  Loader,
  Select,
  Alert,
} from '../components/Styles';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { createOrder, payOrder } from '../actions/orderActions';

export const StripeForm = () => {
  //config
  const history = useHistory();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  //delivery
  const [address, setAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [suburb, setSuburb] = useState('');
  const [postCode, setPostCode] = useState('');
  const [options, setOptions] = useState([
    '-',
    'NSW',
    'QLD',
    'TAS',
    'WA',
    'ACT',
    'VIC',
  ]);
  const [postalState, setPostalState] = useState(options[0]);
  const handleStateChange = (e) => {
    setPostalState(options[e.target.value]);
  };

  //redux state
  const stripeState = useSelector((state) => state.stripe);
  const { secret } = stripeState;

  const cart = useSelector((state) => state.cart);
  const { cartItems, totalPrice } = cart;

  const login = useSelector((state) => state.login);
  const { user } = login;

  const order = useSelector((state) => state.order);
  const { loading: orderLoading, error: orderError } = order;

  const confirmedOrder = useSelector((state) => state.confirmedOrder);

  useEffect(() => {
    if (secret) payStripeOrder();
  }, [secret]);

  const [stripeAlert, setStripeAlert] = useState({ message: '', error: false });

  const payStripeOrder = async () => {
    const {
      error: stripeError,
      paymentIntent,
    } = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (stripeError) {
      console.log(stripeError);
      setStripeAlert({ message: stripeError.message, error: true });
    }

    if (paymentIntent && paymentIntent.status === 'succeeded') {
      setStripeAlert({ message: paymentIntent.status, error: false });
      dispatch(payOrder());
      history.push(`/success/${confirmedOrder._id}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //1. check if user and stripe are present
    if (!user) {
      console.log('not logged in');
    }
    if (!stripe || !elements) {
      console.log('no stripe');
    }

    const delivery = {
      firstName,
      lastName,
      line_1: address,
      suburb,
      postCode,
      state: postalState,
    };

    dispatch(createOrder(delivery, cartItems, totalPrice));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <FormCol>
          <h1 className='text-4xl pt-5 pb-5 font-bold'>Checkout</h1>
          <span className='text-xl pb-5 font-bold'>Delivery</span>
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol>
          <Label htmlFor='address-line-1'>Address</Label>
          <Input
            name='address'
            placeholder=''
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol>
          <Label htmlFor='first-name'>First Name</Label>
          <Input
            name='first-name'
            placeholder='John'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormCol>
        <FormCol>
          <Label htmlFor='last-name'>Last Name</Label>
          <Input
            name='last-name'
            placeholder='Doe'
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol>
          <Label htmlFor='suburb'>Suburb</Label>
          <Input
            name='suburb'
            placeholder='Lane Cove'
            onChange={(e) => setSuburb(e.target.value)}
          />
        </FormCol>
        <FormCol>
          <Label htmlFor='postcode'>Postcode</Label>
          <Input
            name='postcode'
            placeholder='2066'
            onChange={(e) => setPostCode(e.target.value)}
          />
        </FormCol>
        <FormCol>
          <Label htmlFor='state'>State</Label>
          <Select
            name='state'
            onChange={(e) => handleStateChange(e)}
            options={options}
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol>
          {orderLoading && !stripeAlert.error && (
            <Loader>
              {stripeAlert.message ? stripeAlert.message : 'payment processing'}
            </Loader>
          )}
          {orderError && <Error>{orderError}</Error>}
          {stripeAlert.error && <Error>{stripeAlert.message}</Error>}
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol>
          <div className='pt-1 pb-5 mb-5'>
            <h2 className='text-xl pb-5 font-bold'>Payment</h2>
            <CardElement />
          </div>
        </FormCol>
      </FormRow>
      <button
        disabled={!stripe}
        className='bg-red-700 p-4 w-full font-bold text-1xl text-white sticky bottom-0 mt-10'>
        Order Now • ${totalPrice}
      </button>
    </Form>
  );
};

export default StripeForm;
