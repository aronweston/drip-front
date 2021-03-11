import axios from 'axios';
import API from '../config/api';
import React, { useState, useEffect } from 'react';
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
} from '../components/Styles';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { addDelivery } from '../actions/cartActions';
import { createOrder, getOrderSecret } from '../actions/orderActions';

export const StripeForm = ({ onSubmit }) => {
  //config
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

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
    console.log(options[e.target.value]);
  };

  //redux state
  const cart = useSelector((state) => state.cart);
  const login = useSelector((state) => state.login);
  const stripeState = useSelector((state) => state.stripe);
  const order = useSelector((state) => state.order);
  const { delivery: confirmedDelivery, error: cartError } = cart;
  const { user } = login;
  const {
    loading: stripeLoading,
    success: stripeSuccess,
    error: stripeError,
    secret,
  } = stripeState;

  const {
    loading: orderLoading,
    success: orderSuccess,
    error: orderError,
    confirmedOrder,
  } = order;

  //delivery state
  const [delivery, setDelivery] = useState();

  useEffect(() => {
    if (delivery) {
      dispatch(addDelivery(delivery));
    }
  }, [delivery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //1. check if user and stripe are present
    if (!user) {
      setError('Not logged in');
      return;
    } else if (!stripe || !elements) {
      setError('no stripe');
      return;
    }

    //2. set the delivery object to the order
    setDelivery({
      firstName,
      lastName,
      line_1: address,
      suburb,
      postCode,
      state: postalState,
    });

    //3. create order with everything in the cart
    if (confirmedDelivery) {
      dispatch(createOrder(cart));
    }

    if (stripeSuccess) {
      const { error, paymentIntent } = await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        console.log(error);
        setError(error);
      } else {
        if (paymentIntent.status === 'succeeded') {
          console.log(paymentIntent);
          // const order = onSuccess();
          // if (order) {
          //   console.log(order);
          //   // history.push(`/order/success/${order._id}`);
          // }
        } else {
          console.log('fail');
        }
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className='text-2xl pt-5 pb-5 text-center'>Delivery</h1>
      <FormRow>
        <FormCol>
          <Label htmlFor='address-line-1'>Address</Label>
          <Input
            name='address'
            placeholder=''
            onChange={(e) =>
              setAddress({ value: e.target.value, required: true })
            }
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol>
          <Label htmlFor='first-name'>First Name</Label>
          <Input
            name='first-name'
            placeholder='John'
            onChange={(e) =>
              setFirstName({ value: e.target.value, required: true })
            }
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
        <FormRow>
          {orderLoading && <Loader>Payment Processing.</Loader>}
          {orderError || cartError || stripeError ? <Error>Error</Error> : null}
        </FormRow>
      </FormRow>
      <CardElement />
      {/* <button
        disabled={!stripe}
        className={`${
          confirmedOrder && !confirmedOrder.isPaid
            ? 'bg-red-500'
            : 'bg-green-500'
        } p-4 w-full text-white sticky bottom-0`}>
        {confirmedOrder && !confirmedOrder.isPaid ? 'Pay now' : 'Order Paid'}
      </button> */}
      <button
        disabled={!stripe}
        className={`bg-red-500 p-4 w-full text-white sticky bottom-0`}>
        pay now
      </button>
    </Form>
  );
};

export default StripeForm;
