import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, link, description, technologies, features,darkMode }) => {
  return (
    <div className={`${darkMode ? styles.dark : ''} ${styles.card}`}>
      <h3 className={styles.title}>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Ver proyecto
      </a>
      <p className={styles.description}>{description}</p>
      <div className={styles.technologies}>
        <h4>Tecnologías:</h4>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className={styles.features}>
        <h4>Características:</h4>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;


