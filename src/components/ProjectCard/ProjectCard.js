import React from 'react';
import styles from './ProjectCard.module.css';
import { useSpring, animated } from 'react-spring';

const ProjectCard = ({ title, link, description, technologies, features, darkMode }) => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(50%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 200,
    config: { mass: 1, tension: 180, friction: 20 }
  });

  return (
    <animated.div style={springProps} className={`${darkMode ? styles.dark : ''} ${styles.card}`}>
      <h3 className={styles.title}>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>Ver proyecto</a>
      <p className={styles.description}>{description}</p>
      <div className={styles.technologies}>
        <h4>Tecnologías:</h4>
        <ul>
          {technologies.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
      <div className={styles.features}>
        <h4>Características:</h4>
        <ul>
          {features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </div>
    </animated.div>
  );
};

export default ProjectCard;



