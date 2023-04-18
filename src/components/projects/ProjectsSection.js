// src/components/ProjectsSection.js

import React from 'react';
import styles from '../../styles/ProjectsSection.module.css';


function ProjectsSection({ darkMode }) {
  return (
    <section className={`${styles.projectsSection} content ${darkMode ? styles.dark : ''}`}>
      <h2>Proyectos</h2>
      <div className={`${styles.projectsContainer}`}>
        {/* Aquí puedes agregar tus proyectos y su información */}
        <div className={`${styles.project}`}>
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1...</p>
        </div>
        <div className={`${styles.project}`}>
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2...</p>
        </div>
        {/* ... */}
      </div>
    </section>
  );
}

export default ProjectsSection;
