import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/current'>Current</NavLink>
        <NavLink to='/fiveday'>Five Day</NavLink>
      </div>
    )
  }
}

export default NavBar;
