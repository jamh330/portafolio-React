import React from 'react';
import TypingEffect from '../TypingEffect/TypingEffect.js';
import styles from './headerComponent.module.css';

/*
Este componente se encarga de mostrar el encabezado de la página tanto para 
la versión Desktop como para la versión Mobile, ademas se utiliza para 
mostrar el header en la pagina inicial en la vista movil
*/

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
