import React, { Component } from 'react';
import './App.css';
import CurrentComponent from './components/current/CurrentComponent';
import FiveDayComponent from './components/fiveday/FiveDayComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentComponent/>
        <FiveDayComponent/>
      </div>
    );
  }
}

export default App;
