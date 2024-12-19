import axios from 'axios';
import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // L'ID de l'utilisateur, à récupérer dynamiquement si nécessaire
    try {
      const response = await axios.post('http://localhost:5164/api/payment', formData);
      setMessage(response.data); // Paiement validé
    } catch (error) {
      setMessage(error.response?.data || 'Échec du paiement');
    }
  };

  return (
    <div>
      <h2>Formulaire de paiement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Numéro de carte</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="16"
            required
          />
        </div>
        <div>
          <label>Nom du titulaire de la carte</label>
          <input
            type="text"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date d'expiration (MM/AA)</label>
          <input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Code de sécurité (CVV)</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            maxLength="3"
            required
          />
        </div>
        <button type="submit">Payer maintenant</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PaymentForm;
