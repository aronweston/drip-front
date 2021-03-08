import React, { useState } from 'react';

const SubNav = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className='error-container text-center bg-green-600 py-2 text-white'>
      Hello from the subheader, this is where we will render error/success
      messages
    </div>
  );
};

export default SubNav;
