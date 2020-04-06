import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const NavBar = () => (
  <nav class="nav-bar">
    <ul class="nav-bar-links">
      <li class="about-link"><NavLink exact to='/'>Ponder</NavLink></li>
      <li class="about-link">
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/feedback'>Feedback</NavLink>
        <NavLink exact to='/about'>About</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;