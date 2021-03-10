import React, { useState } from 'react';
import { Test } from './Test';

const Landing = () => {
  const testFunction = (address) => {
    console.log(address);
  };

  return <Test onSubmit={testFunction} />;
};

export default Landing;
