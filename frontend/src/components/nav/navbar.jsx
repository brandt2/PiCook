import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <ul>
            <li><Link to={'/main'}>Main</Link></li>
            <li><Link to={'/cuisines'}>Cuisines</Link></li>
            <div>
              <li><button onClick={this.logoutUser}>Logout</button></li>
            </div>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            <li><Link to={'/signup'}>Signup</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <header>
        <nav>
          <h1><Link to="/">PiCook</Link></h1>    
          { this.getLinks() }
        </nav>
      </header>
    );
  }
}

export default NavBar;