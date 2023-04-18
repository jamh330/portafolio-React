// src/components/Navbar/index.js

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : ''}`}>
      <Link to="/"><img src={Logo} alt="Logo" border="0" className={styles.logo}></img></Link>
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
          <Link to="/" className="projects-button" onClick={() => setMenuOpen(false)}>Inicio</Link>
        </li>
        <li className={styles.menu_item}>
          <Link to="/projects" className="projects-button" onClick={() => setMenuOpen(false)}>Proyectos</Link>
        </li>
        <li className={styles.menu_item}>
        <Link to="/contact" className="projects-button" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </li>
      
        <li className={styles.menu_item}>
          <div className={styles.switch}>
            <input
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={toggleDarkMode}
              className={styles.switch_input}
            />
            <label htmlFor="darkModeSwitch" className={styles.switch_label}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.moon_icon}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
