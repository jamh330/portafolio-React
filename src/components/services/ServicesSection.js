// src/components/ProjectsSection.js

import React from 'react';
import styles from '../../styles/ServicesSection.module.css';
import portfolioData from '../../data/portfolioData.json';
import ServiceCard from '../ServiceCard/ServiceCard.js';
import servicesData from './services.json';

function ServicesSection({ darkMode }) {
  return (
    <div className={`${darkMode ? styles.dark : ''}`}>
      <p>Soluciones a medida para cada cliente, centradas en mejorar la experiencia del usuario. Nos especializamos en desarrollo web con WordPress y componentes personalizados en Node.js.</p>
      <div className={`${styles.projectsContainer}`}>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              darkmode={darkMode}
            />
          ))}
      </div>
    </div>
  );
}

export default ServicesSection;
