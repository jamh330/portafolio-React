import React from 'react';
import styles from './BlogCard.module.css';
import { useSpring, animated } from 'react-spring';

const BlogCard = ({ title, excerpt, image, date, author, category, url, darkMode }) => {
  // Animación de entrada con react-spring
  const springStyles = useSpring({
    from: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 10000, friction: 100 }
  });

  return (
    <animated.div style={springStyles} className={`${styles.card} ${darkMode ? styles.dark : ''}`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardExcerpt}>{excerpt}</p>
          <div className={styles.cardMeta}>
            <span className={styles.cardDate}>{date}</span>
            <span className={styles.cardAuthor}>{author}</span>
            <span className={styles.cardCategory}>{category}</span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
            Leer más
          </a>
        </div>
      </a>
    </animated.div>
  );
};

export default BlogCard;
