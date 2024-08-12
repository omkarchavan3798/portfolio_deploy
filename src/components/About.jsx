import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    
    <section className="about">
    <div className="about-content">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am a Front-End Developer with 2 years of experience in building responsive and interactive websites. 
          I specialize in React, CSS, and JavaScript, and I am passionate about creating seamless user experiences.
        </p>
        <a href="/public\Omkar_resume (4).pdf" download="Omkar_resume(4).pdf" className="download-btn">Download CV</a>
      </div>
      <div className="about-image">
        <img src="src\assets\images\My_Image-removebg-preview.png" alt="My Photo" />
      </div>
    </div>
  </section>
   
  );
};

export default About;
