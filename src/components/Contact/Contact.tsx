import * as React from 'react';
import { Component } from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <section className='contact-section'>
        <div className='contact-texts'>
          <h1 className='title'>Get early access today</h1>
          <p className='description'>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <ContactForm />
        </div>
      </section>
    );
  }
}

export default Contact;
