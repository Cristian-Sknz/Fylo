import * as React from 'react';
import { Component } from 'react';
import logo from '../../logo.svg';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-body'>
          <div className='logo'>
            <img src={logo} alt='Filo logo' />
          </div>

          <ul className='navbar-itens'>
            <li>
              <a href='# '>Features</a>
            </li>
            <li>
              <a href='# '>Team</a>
            </li>
            <li>
              <a href='# '>Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
