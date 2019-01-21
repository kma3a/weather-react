import React, { Component } from 'react';
import './App.css';
import CurrentComponent from './components/current/CurrentComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentComponent/>
      </div>
    );
  }
}

export default App;
