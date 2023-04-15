// src/components/ProjectsSection.js

import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {/* Aquí puedes agregar tus proyectos y su información */}
        <div className="project">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1...</p>
        </div>
        <div className="project">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2...</p>
        </div>
        {/* ... */}
      </div>
    </section>
  );
}

export default AboutSection;
