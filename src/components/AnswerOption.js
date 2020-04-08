import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  // console.log(props);
  return (
    <div className="answerOptionContainer" onClick={props.onAnswerSelected} > 
      <li className="answerOption">
        <img className="placeholderImage" src={props.image} />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
      <h2>{props.caption}</h2>
    </div>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
