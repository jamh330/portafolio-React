import React from 'react';
import styles from '../../styles/HomeSection.module.css';
import EmailIcon from '../../assets/email.svg';
import GithubIcon from '../../assets/github.svg';
import portfolioData from '../../data/portfolioData.json';
import { useSpring, animated } from 'react-spring';

const HomeSection = ({ darkMode }) => {
  // Animación de entrada
  const props = useSpring({
    to: { transform: 'translate3d(0, 0, 0)' },
    from: { transform: 'translate3d(0, 100%, 0)' },
    config: { mass: 1, tension: 500, friction: 30 },
  });

  const habilidades = portfolioData.tecnologias;

  return (
    <div className={`${darkMode ? styles.dark : ''}`}>
      <animated.div style={props}>
        <div className={`${styles.card} box`}>
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
              github.com/{portfolioData.git}
            </div>
          </div>
          <p className={styles.description}>{portfolioData.about}</p>
          <div className={styles.skills}>
            {habilidades.map((habilidad, index) => (
            <div key={index} className={styles.skill}>
              {habilidad}
            </div>
            ))}
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default HomeSection;