import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WelcomeNav extends Component {
  render(){
      return (
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a className="navbar-brand" href="#">ToDoApp</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/login'>
            <a className="nav-link" href="#">Login</a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Comming soon</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    );
  }
}

export default WelcomeNav;