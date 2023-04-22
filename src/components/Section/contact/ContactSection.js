// src/components/ProjectsSection.js

import React from 'react';
import styles from '../../../styles/ContactSection.module.css';

function Contact({ darkMode }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejar el envío del formulario, como enviar los datos a una API o guardarlos en una base de datos
  };

  return (
    <div className={darkMode ? styles.dark : ''}>  
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Asunto</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
