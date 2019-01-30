import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import DropDown from '../dropDown';
import '../../styles/navbar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to='/current'>Current</NavLink>
        <NavLink to='/fiveday'>Five Day</NavLink>
        <DropDown/>
      </div>
    )
  }
}

export default NavBar;
