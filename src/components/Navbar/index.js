// src/components/Navbar/index.js

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.logo}><Link to="/" className="projects-button">Mi Portafolio</Link></div>
      <button
        className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
        onClick={handleMenuClick}
      >
      <div className={styles.menu_icon} onClick={handleMenuClick}>
      <span className={`${styles.bar3} ${menuOpen ? styles.cross3 : ''}`}></span>
        <span className={`${styles.bar1} ${menuOpen ? styles.cross1 : ''}`}></span>
        <span className={`${styles.bar2} ${menuOpen ? styles.cross2 : ''}`}></span>
      </div>
      </button>
      
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        <li className={styles.menu_item}>
          <Link to="/" className="projects-button">Inicio</Link>
        </li>
        <li className={styles.menu_item}>
          <Link to="/about" className="projects-button">Proyectos</Link>
        </li>
        <li className={styles.menu_item}>
        <Link to="/contact" className="projects-button">Contacto</Link>
        </li>
        <li className={styles.menu_item}>
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            Modo oscuro
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
