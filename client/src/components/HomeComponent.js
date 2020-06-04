import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLogged: false
    }
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    
  }

  logout(){
    localStorage.setItem('auth-token', 'loggedOut');
    console.log(localStorage.getItem('auth-token'));
  }
  

  render(){
      return (
        <div>
            your in home
            <Link to='/'>
            <button onClick = {this.logout} className="btn btn-primary">Logout</button>
            </Link>
        </div>
      );
  }
}

export default Home;