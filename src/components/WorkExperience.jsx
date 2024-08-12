// src/components/WorkExperience.js
import React from 'react';
import '../styles/WorkExperience.css';

const experiences = [
  {
    company: 'Digital Microsys Technology.',
    role: 'Frontend Developer',
    duration: 'Aug 2022 - Present',
    responsibilities: [
      'Developed and maintained the front end of the company’s main product using React.js.',
      'Collaborated with the backend team to integrate REST APIs.',
      'Implemented responsive design to enhance user experience on mobile devices.',
      'Worked with designers to translate designs into high-quality code.',
     'Optimized web applications for maximum speed and scalability'
    ]
  }
  
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <h3>{experience.company}</h3>
            <h4>{experience.role}</h4>
            <p className="duration">{experience.duration}</p>
            <ul>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
