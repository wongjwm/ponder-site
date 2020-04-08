import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="progressBar">
      <div className="questionCount">
        <div className="questionCountBar"
            style={{width: (((props.counter - 1)/props.total)*100) + "%"}}
        />
      </div>
      <span>Question <b>{props.counter}</b> of <b>{props.total}</b></span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
