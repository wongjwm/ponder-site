import React from 'react';
import PropTypes from 'prop-types';

function ResultBar(props) {
  var youPosn = props.you*100;
  var averagePosn = props.average*100;
  var differenceColor = youPosn >= averagePosn ? "forestgreen" : "crimson";

  return (
    <div className="resultsbar">
      <div className="bar" />
      <div className="difference"
           style={{left: Math.min(youPosn, averagePosn) + "%",
                  width: Math.abs(youPosn - averagePosn) + "%",
                  background: differenceColor}}/>
      <label className="response" style={{left: "calc(" + (youPosn + "%") + " - 50px"}}>You</label>
      <label className="average" style={{left: "calc(" + (averagePosn + "%") + " - 50px"}}>Average</label>
    </div>
  );
}

export default ResultBar;
