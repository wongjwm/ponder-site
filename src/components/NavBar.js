import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-bar">
    <ul className="nav-bar-links">
      <li className="about-link"><NavLink exact to='/'>Ponder</NavLink></li>
      <li className="about-link">
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/about'>About</NavLink>
        <a target="_blank" href="https://forms.gle/Gs17sHsiL5wX4ygX6">Feedback</a>
        <NavLink exact to='/humandata'>HumanData</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;