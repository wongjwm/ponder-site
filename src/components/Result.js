import React from 'react';
import ResultBar from './ResultBar.js';

function Result(props) {
  var moreOrLess = "";
  if(props.vals.you > props.vals.average) moreOrLess = "a higher priority for you than";
  else if(props.vals.you === props.vals.average) moreOrLess = "as much of a priority for you as";
  else moreOrLess = "less of a priority for you than";

  return (
    <div className="result">
      <h2>{props.vals.name}</h2>
      <img src={props.vals.name + ".png"} alt="" />
      {
        props.vals.description.map(function(p, i) {
          return ( <p key={i}>{p}</p> )
        })
      }

      <p>We think <b>{props.vals.name}</b> is <b>{moreOrLess}</b> it is for most people:</p>
      <ResultBar you={props.vals.you} average={props.vals.average} />

      <h3>{props.vals.name} privacy resources</h3>
      <ul className="links">
        {
          props.vals.links.map(function(link, i) {
            return ( <li key={i}><a href={link.url}>{link.name}</a></li> )
          })
        }
      </ul>
    </div>
  );
}

export default Result;
