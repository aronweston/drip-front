import React from 'react';

const LoginController = (props) => {
  if (props && props.login === undefined) {
    return null;
  } else {
    if (props.login === 'LOGGED_IN') {
      return (
        <div>
          <a className='profile-letter' href='/profile'>
            {props.user.username.charAt(0)}
          </a>
        </div>
      );
    } else {
      return (
        <a className='btn btn-primary' href='/login'>
          login
        </a>
      );
    }
  }
};

export default LoginController;
