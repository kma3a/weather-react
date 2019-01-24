import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import CurrentComponent from './components/current/CurrentComponent';
import FiveDayComponent from './components/fiveday/FiveDayComponent';
import HomeComponent from './components/home/HomeComponent';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/current' component={CurrentComponent}/>
            <Route path='/fiveday' component={FiveDayComponent}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
