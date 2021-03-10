import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Label,
  FormRow,
  Input,
  FormCol,
  Select,
} from '../components/Styles';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { addDelivery } from '../actions/cartActions';
import { createOrder } from '../actions/orderActions';

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
  const { delivery: confirmedDelivery } = cart;
  const login = useSelector((state) => state.login);
  const order = useSelector((state) => state.order);
  const { user } = login;
  const { error: orderError, _id } = order;

  //delivery state
  const [delivery, setDelivery] = useState();

  useEffect(() => {
    if (delivery) {
      dispatch(addDelivery(delivery));
    }

    if (orderError) {
      setError(orderError);
      console.log(error);
    }
  }, [delivery, orderError]);

  const handleSubmit = (e) => {
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
    // const deliveryObj =
    setDelivery({
      firstName,
      lastName,
      line_1: address,
      suburb,
      postCode,
      state: postalState,
    });

    if (confirmedDelivery) {
      dispatch(createOrder(cart));
    }

    //2. get order id
    //3. pay for the order
    //4. return either success or fail

    // const { data } = await axios.get(`${API}/order/pay/${id}`);
  };

  // const id = '123';

  // const getSecret = async () => {
  //   try {
  //     const { data } = await axios.get(`${API}/order/pay/${id}`);
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const onSuccess = async () => {
  //   try {
  //     const { data } = await axios.post(`${API}/order/success`, {
  //       id: id,
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const clientSecret = await getSecret();
  //   if (!clientSecret) {
  //     console.log('client secret not found');
  //     return;
  //   }

  //   const { error, paymentIntent } = await stripe.confirmCardPayment(
  //     clientSecret,
  //     {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     }
  //   );

  //   if (error) {
  //     console.log(error);
  //     setError(error);
  //   } else {
  //     if (paymentIntent.status === 'succeeded') {
  //       const order = onSuccess();
  //       if (order) {
  //         console.log(order);
  //         // history.push(`/order/success/${order._id}`);
  //       }
  //     } else {
  //       console.log('fail');
  //     }
  //   }
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className='text-2xl pt-5 pb-5 text-center'>Delivery</h1>
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
      <CardElement />
      <button
        disabled={!stripe}
        className='bg-red-500 p-4 w-full text-white sticky bottom-0'>
        {/* Pay Now • ${totalPrice} */} Pay Now
      </button>
      {error && <h3>{error.message}</h3>}
    </Form>
  );
};

export default StripeForm;
