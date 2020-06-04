import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { withRouter } from 'react-router-dom'
import Main from './components/MainComponent';
import Home from './components/HomeComponent';
import Welcome from './components/WelcomeComponent'



class App extends React.Component {


  constructor(props){
    super(props);
    this.state={
      isLogged: false
    }
  }

  componentDidMount()
  {
    if(localStorage.getItem('token') != null)
    {
    }
  }
  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Main/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
