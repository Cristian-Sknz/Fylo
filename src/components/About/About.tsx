import * as React from 'react';
import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className='about-section'>
        <div className='illustration'>
          <img
            src='./images/illustration-stay-productive.png'
            alt='Illustration Stay Productive'
          />
        </div>
        <div className='section-texts'>
          <h2 className='title'>Stay productive, wherever you are</h2>
          <div className='description'>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <br />
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <br />
            <a href='# '>
              See how Fylo works <i className='icon-arrow' />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
