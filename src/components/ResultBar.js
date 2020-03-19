import React from 'react';
import PropTypes from 'prop-types';

function ResultBar(props) {
  var youPosn = props.you*25;
  var averagePosn = props.average*25;
  
  var differenceLeft  = Math.min(youPosn, averagePosn);
  var differenceWidth = Math.abs(youPosn - averagePosn);
  var differenceColor = youPosn >= averagePosn ? "forestgreen" : "crimson";

  return (
    <div className="resultsbar">
      <div className="bar">
        <div className="lowPriority">low priority</div>
        <div className="highPriority">high priority</div>
        
        <div className="difference"
              style={{left: "calc(" + differenceLeft + "%)",
                      width: "calc(" + differenceWidth + "%)",
                      background: differenceColor}} />
      </div>
      <label className="response" style={{left: "calc(" + (youPosn + "%") + " - 50px"}}>You</label>
      <label className="average" style={{left: "calc(" + (averagePosn + "%") + " - 50px"}}>Average</label>
    </div>
  );
}

export default ResultBar;
