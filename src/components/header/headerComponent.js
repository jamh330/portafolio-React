// src/components/Navbar/index.js

import React, { useState } from 'react';
import styles from './headerComponent.module.css';
import portfolioData from '../../data/portfolioData.json';
import TypingEffect from '../TypingEffect/TypingEffect.js';

const headerComponent = ({darkMode,title, subtitle }) => {

    return (
        <header className={styles.customHeader}>
          <h2 className={styles.title} >{title}</h2>
          {subtitle && <h3 className={styles.subtitle}><TypingEffect text={subtitle} /></h3>}
        </header>
      );
    };

export default headerComponent;
