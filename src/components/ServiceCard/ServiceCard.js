import React from 'react';
import styles from './ServiceCard.module.css';
import { useSpring, animated } from 'react-spring';

const ServiceCard = ({ title, description, icon, darkmode  }) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 200,
    config: { mass: 1, tension: 180, friction: 20 },
  });

  return (
    <animated.div style={animationProps} className={`${styles.card} ${darkmode  ? styles.dark : ''}`}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </animated.div>
  );
};

export default ServiceCard;

