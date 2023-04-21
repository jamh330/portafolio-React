// src/components/Navbar/index.js

import React from 'react';
import TypingEffect from '../TypingEffect/TypingEffect.js';
import styles from './headerComponent.module.css';

const headerComponent = ({ darkMode, title, subtitle, description }) => {
return (
<header className={styles.customHeader}>
<h2 className={styles.title}>{title}</h2>
{subtitle && (
<h3 className={styles.subtitle}>
<TypingEffect text={subtitle} />
</h3>
)}
{description && <p>{description}</p>}
</header>
);
};

export default headerComponent;
