import React from 'react';
import logo from '../svg/logo.svg';

function NavBar() {
  return (
    <div class="NavBar">
    <img src={logo} className="App-logo" alt="logo" />
      <h2>Ponder</h2>
      <div className="NavBar-links">
        <a class="about-link" src="/about">about</a>
        <a class="about-link" src="/about"></a>
        <a class="about-link" src="/about"></a>
      </div>
    </div>
  );
}

export default NavBar;