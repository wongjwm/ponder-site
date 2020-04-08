import React from 'react';

function ResultBar(props) {
  var youPosn = props.you*25;
  var averagePosn = props.average*25;

  return (
    <div className="resultsBarContainer">
      <div className="lowPriority">low priority</div>

      <div className="resultsbar">
        <div className="bar">
          
          <div className="youBar"
              style={{width: "calc(" + youPosn + "%)",
              zIndex: youPosn > averagePosn ? 1 : 2}} />
          <div className="averageBar"
              style={{width: "calc(" + averagePosn + "%)",
              zIndex: youPosn > averagePosn ? 2 : 1}} />
        </div>

        <label className="response" style={{left: "calc(" + youPosn + "% - 50px"}}>You</label>
        <label className="average" style={{left: "calc(" + averagePosn + "% - 50px"}}>Average</label>
      </div>

      <div className="highPriority">high priority</div>
    </div>
  );
}

export default ResultBar;
