// src/components/Skills.js
import React from 'react';
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faGithub, faBootstrap, faNpm, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: faHtml5 },
      { name: 'CSS', icon: faCss3Alt },
      { name: 'JavaScript', icon: faJs },
      { name: 'React', icon: faReact },
      { name: 'Redux', icon: faReact },
      { name: 'Bootstrap', icon: faBootstrap },
      { name: 'Sass', icon: faSass }
    ]
  },
 
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: faGitAlt },
      { name: 'GitHub', icon: faGithub },
      { name: 'VS Code', icon: faReact }, // Replace with appropriate icon if available
      { name: 'npm', icon: faNpm },
      { name: 'Webpack', icon: faReact } // Replace with appropriate icon if available
    ]
  }
  // Add more skill categories as needed
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skillCategory, index) => (
          <div className="skills-category" key={index}>
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.items.map((item, idx) => (
                <li key={idx}>
                  <FontAwesomeIcon icon={item.icon} className="skill-icon" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
