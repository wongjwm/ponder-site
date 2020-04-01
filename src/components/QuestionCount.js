import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      <div className="questionCountBar"
           style={{width: (((props.counter - 1)/props.total)*100) + "%"}}
      />
      {/* Question <span>{props.counter}</span> of <span>{props.total}</span> */}
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
