import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Welcome from './WelcomeComponent';
import Login from './LoginComponent';
import Home from './HomeComponent';

class Main extends Component {

  constructor(porps){
    super(porps);
    this.state = {
      isLogged: false
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('auth-token');
    if(localStorage.getItem('auth-token')!='loggedOut')
    {
      this.setState({
        isLogged: !this.state.isLogged
      })
    }
  }

  render(){
    if(this.state.isLogged)
    return <Redirect to='/home'/>
    
      return (
        <div className="div">
          <Switch>
          <Route path='/' exact component={Welcome}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/home' exact component={Home} />
          </Switch>
        </div>
      );
  }
}

export default Main;