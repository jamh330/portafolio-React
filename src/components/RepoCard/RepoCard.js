import { useSpring, animated } from 'react-spring';
import styles from './RepoCard.module.css';

const RepoCard = ({ data, darkMode }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  const infoRepo = data;

  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 0, -50%)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 60,
    config: { mass: 1, tension: 180, friction: 20 },
  });

  return (
    <animated.div style={props} className={`${styles.repoCard} ${darkMode ? styles.dark : ''}`}>
      <a href={infoRepo.html_url} target="_blank" rel="noopener noreferrer">
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{infoRepo.name}</h3>
          <p>{infoRepo.description}</p>
          <p>
            <span>🔧 {infoRepo.language}</span>
            <span>🌟 {infoRepo.stargazers_count}</span>
            <span>🍴 {infoRepo.forks_count}</span>
          </p>
          <p>Última actualización: {formatDate(infoRepo.updated_at)}</p>
        </div>
        <div className={styles.buttonContainer}>
          <a href={infoRepo.html_url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
            Ver Repositorio
          </a>
        </div>
      </a>
    </animated.div>
  );
};

export default RepoCard;

