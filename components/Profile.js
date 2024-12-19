import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // Récupérer le token JWT
        const response = await axios.get('http://localhost:5164/api/orders/user-orders', {
          headers: {
            Authorization: `Bearer ${token}`, // Ajouter le token JWT dans l'en-tête Authorization
          },
        });
        setOrders(response.data);
      } catch (err) {
        setError('Erreur lors du chargement des commandes');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Historique des commandes</h1>
      {error && <p>{error}</p>}
      {orders.length === 0 ? (
        <p>Vous n'avez aucune commande pour le moment.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Commande #{order.id}</p>
              <p>Date : {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>Statut : {order.orderStatus}</p>
              <p>Total : ${order.totalPrice.toFixed(2)}</p>
              <ul>
                {order.orderItems.map((item) => (
                  <li key={item.id}>
                    {item.article.name} - Quantité : {item.quantity} - Prix : ${item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
