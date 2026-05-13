import React, { useRef } from 'react';
import Card from '../Component/Shared/Card';
import Button from '../Component/Shared/Button';
import './Contact.scss';

const Contact = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("✅Message Sent succerfully, thanks to reach-out we will sortly answer you.")
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''

    nameRef.current.focus();
  }

  return (
    <div className='contact-container'>
      <Card>
        <div className='contact-header'>
          <h2>Contact Us</h2>
          <p>Have questions about the Feedback App? Drop us a line!</p>
        </div>

        <form onSubmit={handleSubmit} className='contact-form'>

          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            id='name'
            ref={nameRef}
            placeholder='Enter your name'
            required
          />

          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            placeholder='name@example.com'
            ref={emailRef}
            required
          />
          <label htmlFor='message'>How can we help?</label>
          <textarea
            id='message'
            rows='4'
            ref={messageRef}
            placeholder='Your message...'
            required
          ></textarea>


          <div className='form-actions'>
            {/* Using your shared Button component */}
            <Button type='submit' version='primary'>
              Send Message
            </Button>
          </div>
        </form>
      </Card>

      <div className='contact-footer'>
        <p>Feel free to reach out for any project queries!</p>
      </div>
    </div>
  );
};

export default Contact;