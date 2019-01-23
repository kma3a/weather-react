import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/current'>Current</Link>
        <Link to='/fiveday'>Five Day</Link>
      </div>
    )
  }
}

export default withRouter(NavBar);
