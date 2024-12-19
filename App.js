import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Articles from './components/Articles';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';

import PaymentForm from './components/PaymentForm';
import Profile from './components/Profile';
import SignUp from './components/SignUp';


const App = () => {



  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>

          
          <Route path="/" element={<Categories />} />
          <Route path="/category/:id" element={<Articles />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/payment" element={<PaymentForm/>} />
          <Route path="/profile" element={<Profile/>} />

         
          

          
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
