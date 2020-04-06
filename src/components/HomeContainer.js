import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

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
      <div className="container homeContainer">
        <div className="background" />
        <div className="homeContent">
          <h1>Ponder</h1>
          <h2>Would you rather...?</h2>
          <p>a platform for gathering opinions on data privacy</p>
          <button onClick={this.handleIntro}>START</button>
        </div>
      </div>
    );
  }

  renderIntro() {
    return (
      <div className="container intro">
        <p>You might have received your first smartphone at age 10. Maybe your school had iPads. Maybe you’ve never used a flip phone.</p>
        <p>You grew up with technology. It makes your life very convenient and customizable.</p>
        <p>That being said, how do you make decisions regarding technology?</p>
        <p>You’ll be presented with 10 scenarios. What would you do if these situations presented themselves in real life?</p>
        <NavLink exact to='/quiz'><button>NEXT</button></NavLink>
      </div>
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
