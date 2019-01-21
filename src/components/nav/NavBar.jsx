import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to='/current'>Current</Link>
        <Link to='/fiveday'>Five Day</Link>
      </div>
    )
  }
}

export default NavBar;
