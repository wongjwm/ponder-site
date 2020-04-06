import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import QuizContainer from './QuizContainer';
import AboutContainer from './AboutContainer';
import HomeContainer from './HomeContainer';

const MainContainer = () => (
  <Switch>
    <Route exact path='/' component={HomeContainer}></Route>
    <Route exact path='/quiz' component={QuizContainer}></Route>
    <Route exact path='/about' component={AboutContainer}></Route>
  </Switch>
);

export default MainContainer;