import React, { useState } from 'react';
import {
  Form,
  Label,
  FormRow,
  Input,
  FormCol,
  Select,
} from '../components/Styles';

export const Test = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(e);
    onSubmit(address);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className='text-2xl pt-5 pb-5 bg-green-400'>Delivery</h1>
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
      <button>Submit</button>
    </Form>
  );
};
