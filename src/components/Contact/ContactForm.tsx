import * as React from 'react';
import { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
        <div className='form-input'>
          <input type='email' placeholder='email@example.com'></input>
        </div>
        <button type='submit'>Get Started For Free</button>
      </form>
    );
  }
}

export default ContactForm;
