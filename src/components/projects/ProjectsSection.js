// src/components/ProjectsSection.js

import React from 'react';
import styles from '../../styles/ProjectsSection.module.css';
import portfolioData from '../../data/portfolioData.json';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import projectsData from './projects.json';


function ProjectsSection({ darkMode }) {
  return (
    
    <div className={`${darkMode ? styles.dark : ''}`}>
      <p>Descubre mis proyectos enfocados en mejorar la experiencia del usuario y optimizar soluciones para clientes. Principalmente trabajo con WordPress y componentes personalizados en Node.js, creando soluciones efectivas y de alta calidad.</p>
      <div className={`${styles.projectsContainer}`}>
      <div className={styles.projects}>
      {projectsData.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          link={project.link}
          description={project.description}
          technologies={project.technologies}
          features={project.features}
          darkMode={darkMode}
        />
      ))}
    </div>
      </div>
      </div>
  );
}

export default ProjectsSection;
