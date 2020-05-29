import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { withRouter } from 'react-router-dom'
import Main from './components/MainComponent';
import Welcome from './components/WelcomeComponent';
import Login from './components/LoginComponent';;



class App extends React.Component {

  componentDidMount()
  {
    if(localStorage.getItem('token'))
    {
          
    }
  }
  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/login' exact component={Login}/>
          <Route path='/home' exact component={Main}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
