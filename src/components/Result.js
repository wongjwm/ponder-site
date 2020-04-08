import React from 'react';
import ResultBar from './ResultBar.js';

function Result(props) {
  

  return (
    <div className="result">
      <img src={props.vals.name + ".png"} alt="" />
      <h2>{props.vals.name}</h2>
      <ResultBar you={props.vals.you} average={props.vals.average} />
      {
        props.vals.description.map(function(p, i) {
          return ( <p key={i}>{p}</p> )
        })
      }
    </div>
  );
}

export default Result;
