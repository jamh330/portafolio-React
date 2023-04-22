// src/components/ProjectsSection.js

import React from 'react';
import styles from '../../../styles/ProjectsSection.module.css';
import ProjectCard from '../../Structure/ProjectCard/ProjectCard.js';
import projectsData from './projects.json';

const ProjectsSection = ({ darkMode }) => {

  const renderProjectCards = () => {
    return projectsData.map((project) => (
    <ProjectCard
        key={project.title}
        title={project.title}
        link={project.link}
        description={project.description}
        technologies={project.technologies}
        features={project.features}
        darkMode={darkMode}
      />
    ));
  }

  return (
    <div className={`${styles.projectsContainer} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.projects}>
        {renderProjectCards()}
      </div>
    </div>
  );
}

export default ProjectsSection;
