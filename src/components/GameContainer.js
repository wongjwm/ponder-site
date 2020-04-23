import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
 
class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div id="GameContainer" className="container">
        <div className="logo">
          <h2>Ponder</h2>
          <h1><span>Human</span>Data</h1>
        </div>
        
        <p>Over the course of our research and data collection, we've worked with both students and educators in order to understand how our target demographic thinks about and prioritizes issues within the problem space of data privacy. Using our findings, we've imagined an extension of the Ponder site that we call <b>HumanData</b>.</p>
        <p>This product seeks to take the same conversations we hope to inspire with our web app and bring them to educators and their classrooms in a form that is more engaging for our target demographic. Inspired by speculative design activities, HumanData is a simple card-based group thought exercise that asks you to consider your data, where and to whom it goes, and what you're doing to protect your privacy.</p>
        <p>Open or download the below PDF file for a breakdown of how to engage with the HumanData thought exercise, as well as for a print-and-cut list of the cards included.</p>
        
        <a href='/Ponder HumanData -- Cards Printout.pdf' target="_blank">
          <button><FontAwesomeIcon icon={faDownload} /> HumanData Cards Printout</button>
        </a>
      </div>
    );
  }
}

export default GameContainer;