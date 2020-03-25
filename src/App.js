import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
  }

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
