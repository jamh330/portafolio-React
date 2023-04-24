// src/components/Navbar/index.js

import React, { useState,useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import portfolioData from '../../data/portfolioData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlog ,faHome,faEnvelope,faTasks ,faCodeBranch,faWrench} from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ toggleDarkMode, darkMode }) => {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollTop = () => {
    
  }
  
//agregar iconos
  const menuItems = [
    { name: 'Inicio', path: 'Inicio', icon:faHome },
    { name: 'Proyectos', path: '#Proyectos', icon:faTasks  },
    { name: 'Servicios', path: 'Servicios', icon:faWrench },
    { name: 'Repositorios', path: 'Repositorios', icon:faCodeBranch   },
    { name: 'Blog', path: 'Blog', icon:faBlog },
    { name: 'Contacto', path: 'Contacto', icon:faEnvelope }
  ];

  const activeIndex = menuItems.findIndex(item => item.path === location.pathname);

  const [isRotating, setIsRotating] = useState(false);

  const handleMouseEnter = () => {
    setIsRotating(!isRotating);
  };

  useEffect(() => {
    document.querySelector('section').addEventListener('scroll', handleScroll);
    return () => {
      document.querySelector('section').removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [scrollChange, setscrollChange] = useState(false);
  const [scroll2, setscroll2] = useState(false);

  const handleScroll = () => {
    const heigthElement= document.querySelector('section');

    if(heigthElement.scrollTop > 900){
      setscrollChange(true)
      if(heigthElement.scrollTop > 900){
        setscroll2(true)
        return;
      }
      return;
    }
    
    setscrollChange(false)
    setscroll2(false)
  };
 
  return (
    <nav className={`${scrollChange ? styles.miniNav : ''} ${styles.navbar} ${darkMode ? styles.dark : ''}`}>
      <a href="/" onClick={() => {setMenuOpen(false);scrollTop()}} className={styles.imgLogoHome}>
        <img 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseEnter}
          src={Logo} 
          alt="Logo" 
          border="0" 
          className={`${styles.logo}  ${isRotating ? styles.rotate : ''}`}/>
      </a>
      <div className={styles.titleMain}>
        <Link to="/" className="projects-button" onClick={() => {setMenuOpen(false);scrollTop()}}>
            <span className={styles.titleFirst}>Portafolio</span>
            <span className={styles.titleSecond}>{portfolioData.name}</span>
        </Link>
      </div>
      <button
        className={`${scroll2 ? styles.miniButton : ''} ${styles.menuButton} ${menuOpen ? styles.open : ''}`}
        onClick={()=>{handleMenuClick();handleMouseEnter()}}
      >
        <div className={styles.menu_icon} onClick={handleMenuClick}>
          <span className={`${styles.bar3} ${menuOpen ? styles.cross3 : ''}`}></span>
          <span className={`${styles.bar1} ${menuOpen ? styles.cross1 : ''}`}></span>
          <span className={`${styles.bar2} ${menuOpen ? styles.cross2 : ''}`}></span>
        </div>
      </button>

      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
      {menuItems.map((item, index) => (
          <li
            key={index}
            className={styles.menu_item}
          > 
            <span className={`${styles.iconMenu}`}>
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <Link 
              to={item.path}
              onClick={() => {setMenuOpen(false);scrollTop()}}
              className={`projects-button  ${index === activeIndex ? 'active' : ''}`} 
            >
              {item.name}
            </Link>
          </li>
        ))}

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${styles.sun_icon} ${darkMode ? '' : styles.hidden}`}
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </label>
            </div>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
