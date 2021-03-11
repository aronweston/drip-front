import React, { useState } from 'react';
import { Test } from './Test';

export const sayHello = ({ children }) => {
  return <h1>{children}</h1>;
};

const Landing = () => {
  return <sayHello>Hello world</sayHello>;
};

export default Landing;
