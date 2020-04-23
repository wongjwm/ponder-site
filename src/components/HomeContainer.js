import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { CSSTransitionGroup } from 'react-transition-group';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intro: false
    };

    this.handleIntro = this.handleIntro.bind(this);

  }

  componentDidMount() {
    
  }

  handleIntro() {
    this.setState({
      intro: true
    })
  }

  renderHome() {
    return (
      <div className="container" id="HomeContainer">
        <img src="Ponder Background.png" alt="" />
        <div className="homeContent">
          <h1>Ponder</h1>
          <h2>Would you rather...?</h2>
          <p>a platform for gathering opinions on data privacy</p>
          <button onClick={this.handleIntro}>START <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    );
  }

  renderIntro() {
    return (
      <CSSTransitionGroup
      className="container intro"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="container intro">
        <h4>You might have received your first smartphone at age 10. Maybe you’ve only ever seen a flip phone in a museum. Maybe your school has iPads.</h4>
        <h4>You grew up with technology. It makes your life very convenient and customizable.</h4>
        <h3>That being said, how do you make decisions regarding technology?</h3>
        <h3>You’ll be presented with 10 scenarios. These are all scenarios that have happened at some point. What would you do if these situations presented themselves in real life?</h3>
        <NavLink exact to='/quiz'><button>NEXT <FontAwesomeIcon icon={faArrowRight} /></button></NavLink>
      </div>
      </CSSTransitionGroup>
    );
  }

  render() {
    return (
      <div>
        {this.state.intro ? this.renderIntro() : this.renderHome()}
      </div>
    );
  }
}

export default HomeContainer;
