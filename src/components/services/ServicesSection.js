// src/components/ProjectsSection.js

import React from 'react';
import styles from '../../styles/ServicesSection.module.css';
import ServiceCard from '../ServiceCard/ServiceCard.js';
import servicesData from './services.json';

function ServicesSection({ darkMode }) {
  const services = servicesData.map((service, index) => (
    <ServiceCard
      key={index}
      title={service.title}
      description={service.description}
      icon={service.icon}
      darkmode={darkMode}
    />
  ));

  return (
    <div className={`${darkMode ? styles.dark : ''}`}>
      <div className={styles.projectsContainer}>
        {services}
      </div>
    </div>
  );
}

export default ServicesSection;

