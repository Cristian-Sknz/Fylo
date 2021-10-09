import * as React from 'react';
import { Component } from 'react';

import './Footer.css';
import logo from '../../logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <img src={logo} alt='logo'/>
        <div className='footer-body'>
          <div className='location-container'>
            <i className='location-icon'/>
            <p className='location-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className='footer-contact'>
            <i className='contact-number'>+1-543-123-4567</i>
            <i className='contact-email'>example@fylo.com</i>
          </div>

          <ul className='footer-links'>
            <li className='footer-link'>
              <a href='# '>About Us</a>
            </li>
            <li className='footer-link'>
              <a href='# '>Jobs</a>
            </li>
            <li className='footer-link'>
              <a href='# '>Press</a>
            </li>
            <li className='footer-link'>
              <a href='# '>Blog</a>
            </li>
          </ul>

          <ul className='footer-links'>
            <li className='footer-link'>
              <a href='# '>Contact Us</a>
            </li>
            <li className='footer-link'>
              <a href='# '>Terms</a>
            </li>
            <li className='footer-link'>
              <a href='# '>Privacy</a>
            </li>
          </ul>

          <ul className='social-medias'>
            <li className='social-media'>
              <a href='# '>
                <i className='facebook-icon'/>
              </a>
            </li>
            <li className='social-media'>
              <a href='# '>
                <i className='twitter-icon'/>
              </a>
            </li>
            <li className='social-media'>
              <a href='# '>
                <i className='instagram-icon'/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
