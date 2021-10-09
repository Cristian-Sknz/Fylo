import React, { Component } from 'react';

import Navbar from './components/Interface/Navbar';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import About from './components/About/About';
import Comments from './components/Comments/Comments';
import Contact from './components/Contact/Contact';
import Footer from './components/Interface/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Home />
        <Features />
        <About />
        <Comments />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
