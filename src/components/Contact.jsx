// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-list">
        <a href="https://www.linkedin.com/in/omkarchavan3798" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          LinkedIn
        </a>
        <a href="https://github.com/omkarchavan3798" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          GitHub
        </a>
        <a href="mailto:omkarchavan3798@gmail.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
