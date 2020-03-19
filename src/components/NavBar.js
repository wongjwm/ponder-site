import React from 'react';

function NavBar() {
  return (
    <div class="nav-bar">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h3>Ponder</h3>
      <div className="nav-bar-links">
        <a class="about-link" src="/about">about</a>
        <a class="about-link" src="/about">feedback</a>
        <a class="about-link" src="/about"></a>
      </div>
    </div>
  );
}

export default NavBar;