import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import CurrentComponent from './components/current/CurrentComponent';
import FiveDayComponent from './components/fiveday/FiveDayComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Redirect exact from='/' to='/current'/>
          <Route path='/current' component={CurrentComponent}/>
          <Route path='/fiveday' component={FiveDayComponent}/>
        </Switch>
      </div>
    );
  }
}

export default App;
