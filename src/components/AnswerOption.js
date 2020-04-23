import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <div className="answerOptionContainer" id={props.answerType} onClick={props.onAnswerSelected} > 
      <li className="answerOption">
        <img className="placeholderImage" src={props.image} alt="" />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    </div>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
