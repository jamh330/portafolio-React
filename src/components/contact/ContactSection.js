// src/components/ProjectsSection.js

import React from 'react';
import './ContactSection.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar los datos a una API o guardarlos en una base de datos
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Asunto</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
