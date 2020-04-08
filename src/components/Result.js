import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import ResultBar from './ResultBar.js';

function Result(props) {
  

  return (
    <div className="result">
      <img src={props.vals.name + ".png"} />
      <h2>{props.vals.name}</h2>
      <ResultBar you={props.vals.you} average={props.vals.average} />
      {
        props.vals.description.map(function(p, i) {
          return ( <p>{p}</p> )
        })
      }
    </div>
  );
}

export default Result;
