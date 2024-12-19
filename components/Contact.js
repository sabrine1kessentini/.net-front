// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>

      <div className="contact-details">
        <h2>Coordonnées</h2>
        <p><strong>Adresse :</strong> 123 Rue du Restaurant, Paris, France</p>
        <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
        <p><strong>Email :</strong> contact@restaurant.com</p>
      </div>

      <div className="contact-form">
        <h2>Formulaire de Contact</h2>
        <form>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className="social-links">
        <h2>Suivez-nous</h2>
        <a href="https://facebook.com/restaurant" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/restaurant" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com/restaurant" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
}

export default Contact;
