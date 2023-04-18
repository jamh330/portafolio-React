// src/components/UserProfile.js

import React from 'react';
import styles from '../styles/UserProfile.module.css';
import EmailIcon from '../assets/email.svg';
import GithubIcon from '../assets/github.svg';

const UserProfile = ({ darkMode }) => {
  const habilidades = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Git',
    'SQL',
  ];

  return (
    <div className={`content ${darkMode ? styles.dark : ''}`}>
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src="https://via.placeholder.com/100"
          alt="Perfil"
          className={styles.profile_image}
        />
        <h2 className={styles.name}>Juanita Pérez</h2>
        <h3 className={styles.title}>Ingeniera de Software</h3>
        <div className={styles.contact}>
          <div className={styles.contact_item}>
            <img src={EmailIcon} alt="Correo" className={styles.contact_icon} />
            juanita.perez@ejemplo.com
          </div>
          <div className={styles.contact_item}>
            <img src={GithubIcon} alt="Github" className={styles.contact_icon} />
            github.com/juanitaperez
          </div>
        </div>
        <p className={styles.description}>
          Apasionada por crear soluciones de software elegantes y eficientes.
          Experiencia en varios lenguajes de programación y tecnologías.
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
    </div>
  );
};

export default UserProfile;
