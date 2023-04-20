import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ title, excerpt, image, date, author, category, url }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardExcerpt}>{excerpt}</p>
        <div className={styles.cardMeta}>
          <span className={styles.cardDate}>{date}</span>
          <span className={styles.cardAuthor}>{author}</span>
          <span className={styles.cardCategory}>{category}</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          Leer más
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
