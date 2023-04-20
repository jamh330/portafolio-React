// src/components/UserProfile.js

import React from 'react';
import styles from '../../styles/HomeSection.module.css';
import EmailIcon from '../../assets/email.svg';
import GithubIcon from '../../assets/github.svg';
import portfolioData from '../../data/portfolioData.json';

const HomeSection = ({ darkMode }) => {
  const habilidades = portfolioData.tecnologias;

  return (
    <div className={`${darkMode ? styles.dark : ''}`}>
      <p>Te doy la bienvenida, aquí podrás encontrar información sobre mi trabajo, una selección de mis proyectos 
        de informática más destacados y ayuda para tus proyectos.</p>
        <div className={styles.card}>
          <img
            src="https://via.placeholder.com/100"
            alt="Perfil"
            className={styles.profile_image}
          />
          <h2 className={styles.name}>{portfolioData.name}</h2>
          <h3 className={styles.title}>{portfolioData.profesion}</h3>
          <div className={styles.contact}>
            <div className={styles.contact_item}>
              <img src={EmailIcon} alt="Correo" className={styles.contact_icon} />
              {portfolioData.mail}
            </div>
            <div className={styles.contact_item}>
              <img src={GithubIcon} alt="Github" className={styles.contact_icon} />
              {portfolioData.git}
            </div>
          </div>
          <p className={styles.description}>
          {portfolioData.about}
          </p>
          <div className={styles.skills}>
            {habilidades.map((habilidad, index) => (
              <div key={index} className={styles.skill}>
                {habilidad}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
