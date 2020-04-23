import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        image={"./" + key.type + ".png"}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  function renderAnswerCaptions(key, i) {
    return (
      <li key={i}>
        <div>MORE INFO <FontAwesomeIcon icon={faArrowDown} /></div>
        <div>
          <h3>{key.captionTitle}</h3>
          <ul>
            {key.caption.map(function(li, i) { return ( <li>{li}</li> ) } )}
          </ul>
        </div>
      </li>
    )
  }

  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.length > 0 && renderAnswerOptions(props.answerOptions[0])}
          <div className="orLabel">
            <div>OR</div>
          </div>
          {props.answerOptions.length > 0 && renderAnswerOptions(props.answerOptions[1])}
        </ul>
        <ul className="answerCaptions">
          {props.answerOptions.map(renderAnswerCaptions)}
        </ul>
      </div>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
