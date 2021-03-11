import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  Form,
  Label,
  FormRow,
  Input,
  FormCol,
  Select,
} from '../components/Styles';

const Delivery = ({ onSubmit }) => {
  const [address, setAddress] = useState({});
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [suburb, setSuburb] = useState();
  const [postCode, setPostCode] = useState();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
    // const delivery = {
    //   firstName,
    //   lastName,
    //   line1: address,
    //   suburb,
    //   postCode,
    //   state: postalState,
    // };
    console.log(delivery);
    //here I call getDeliveryDetails
    // if (delivery) onSubmit(delivery);
  };

  const handleStateChange = (e) => {
    setPostalState(options[e.target.value]);
    console.log(options[e.target.value]);
    console.log(postalState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className='text-2xl pt-5 pb-5 bg-green-400'>Delivery</h1>
      <FormRow>
        <FormCol>
          <Label htmlFor='address-line-1'>Address</Label>
          <Input
            name='address'
            placeholder='123 Batman Road'
            onChange={(e) => {
              setAddress([e.target.value, 'required']);
              console.log(address);
            }}
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
      <button>submit</button>
    </Form>
  );
};

export default Delivery;
