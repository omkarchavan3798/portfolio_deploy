// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    name: 'Myntra CLone',
    description: 'A clone of the popular e-commerce website Myntra. This project replicates the core features including product listings, filtering, sorting, and a responsive design',
    skills: 'React, CSS, JavaScript ,Html,Boostrap',
    link: 'https://github.com/omkarchavan3798/Html-Css-Project-Myntra-Clone'
  },
  {
    name: 'Movix Application',
    description: 'A movie website where users can search for movies, view details, and read reviews. The project includes features such as movie search, filter by genre, and a responsive design.',
    skills: 'HTML, CSS, JavaScript, React JS, Sass',
    link: "https://github.com/omkarchavan3798/React-Movie-App"
  },
  {
    name: 'Food Delivary App',
    description: 'A food delivery app designed with HTML and CSS. It includes features like browsing restaurants, viewing menus, and placing orders. The app emphasizes a clean and user-friendly interface.',
    skills: 'HTML, CSS',
    link: 'https://github.com/omkarchavan3798/Html-Css-Project-Food-Delivary-App'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects">
    <h2>My Projects</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Skills used:</strong> {project.skills}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Projects;
