import React from 'react';
import { Switch, Route } from 'react-router-dom';
import QuizContainer from './QuizContainer';
import AboutContainer from './AboutContainer';
import HomeContainer from './HomeContainer';
import ResultsList from './ResultsList';

const MainContainer = () => (
  <Switch>
    <Route exact path='/' component={HomeContainer}></Route>
    <Route exact path='/quiz' component={QuizContainer}></Route>
    <Route exact path='/results' component={ResultsList}></Route>
    <Route exact path='/about' component={AboutContainer}></Route>
  </Switch>
);

export default MainContainer;