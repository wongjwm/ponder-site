import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-bar">
    <ul className="nav-bar-links">
      <li className="about-link"><NavLink exact to='/'>Ponder</NavLink></li>
      <li className="about-link">
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/feedback'>Feedback</NavLink>
        <NavLink exact to='/about'>About</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;