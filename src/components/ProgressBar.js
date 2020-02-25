import React from 'react';
import PropTypes from 'prop-types';


function ProgressBar(props) {
  return (
    <div class="progressBar">
      onchange={props.questionNumber}
    </div>
  );
}

export default ProgressBar;