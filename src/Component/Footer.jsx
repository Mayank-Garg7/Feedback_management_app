import React from 'react';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <p>&copy; {footerYear} Feedback App. All rights reserved.</p>
          
          <div className='social-links'>
            <a 
              href='https://github.com/mayank-garg7' 
              target='_blank' 
              rel='noreferrer'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
            <a 
              href='https://youtube.com' 
              target='_blank' 
              rel='noreferrer'
              aria-label='YouTube'
            >
              <FaYoutube />
            </a>
            <a 
              href='https://linkedin.com' 
              target='_blank' 
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;