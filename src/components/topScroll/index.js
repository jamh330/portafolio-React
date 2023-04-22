import React, { useState, useEffect } from 'react';
import styles from './topScroll.module.css';

function TopScroll() {
  const [scrollChange, setScrollChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heightElement = document.querySelector('section');

      if (heightElement.scrollTop > 30) {
        setScrollChange(true);
      } else {
        setScrollChange(false);
      }
    };

    document.querySelector('section').addEventListener('scroll', handleScroll);
    return () => {
      document.querySelector('section').removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTop = () => {
    document.querySelector('section').scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`${scrollChange ? styles.showButton : ''} ${styles.buttonUp}`} onClick={scrollTop}>
      up
    </button>
  );
}

export default TopScroll;
