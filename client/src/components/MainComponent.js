import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Welcome from './WelcomeComponent';
import Login from './LoginComponent';
import Home from './HomeComponent';
import WelcomeNav from './WelcomeNavComponent';
import WelcomeBody from './WelcomeBodyComponent';
import { connect } from 'react-redux'
import { loginUser } from '../redux/ActionCreaters'

const mapPropsToState = (storeState) => ({
  loginData : storeState.loginData
});

const mapDispatchToState = (dispatch) => {
  return {
    loginUser : (user)=>dispatch(loginUser(user))
  }
}

class Main extends Component {

  constructor(props){
    super(props);
  }
  render(){

      return (
        <BrowserRouter>
        <div className="div">
          <WelcomeNav/>
          <Switch>
          <Route path='/' exact component={WelcomeBody}/>
          <Route path='/login' component={props=> <Login loginUser = {this.props.loginUser} {...props} />}/>
          <Route path='/home' exact component={Home}/>
          </Switch>
        </div>
        </BrowserRouter>
      );
  }
}

export default connect(mapPropsToState,mapDispatchToState)(Main);