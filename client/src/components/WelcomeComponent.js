import React, { Component } from 'react';
import WelcomeNav from './WelcomeNavComponent';
import WelcomeBody from './WelcomeBodyComponent';
import './css/welcomebody.css';

class Welcome extends Component {
  render(){
      return (
          <div className="container-fluid welcome-main-div">
              <WelcomeNav/>
              <WelcomeBody/>
          </div>
      );
  }
}

export default Welcome;