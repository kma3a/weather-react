import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import DropDown from '../dropDown';

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/current'>Current</NavLink>
        <NavLink to='/fiveday'>Five Day</NavLink>
        <DropDown/>
        
      </div>
    )
  }
}

export default NavBar;
