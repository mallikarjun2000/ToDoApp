import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import Home from './components/HomeComponent';
import Welcome from './components/WelcomeComponent'
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore'

const store = configureStore();



class App extends React.Component {
  
  render()
  {
    return (
      <Provider store = { store }>
      <div className="App">
        <Main
        loginUser = {this.props.loginUser}
        />
      </div>
      </Provider>
    );
  }
}

export default App;
