import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
        <NavLink to='/landing'>Landing</NavLink>
        <NavLink to='/quiz'>Quiz</NavLink>
        <NavLink to='/recommendation'>Recom</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
