import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import ResultBar from './ResultBar.js';

function Result(props) {
  

  return (
    <div className="result">
      <h2>{props.vals.name}</h2>
      <ResultBar you={props.vals.you} average={props.vals.average} />
      <p>{props.vals.description}</p>
    </div>
  );
}

export default Result;
