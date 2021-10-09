import * as React from 'react';
import { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <section className='home-section'>
        <div className='illustration'>
          <img src='./images/illustration-intro.png' alt='Illustration Intro' />
        </div>
        <div className='section-texts'>
          <h1 className='title'>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className='description'>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>
        <button className='get-started'>Get Started</button>
      </section>
    );
  }
}

export default Home;
