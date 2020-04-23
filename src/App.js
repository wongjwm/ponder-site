import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <MainContainer/>
      </div>
    );
  }
}

export default App;