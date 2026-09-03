import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function LandingPage() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <span className="brand">Paradise Nursery</span>
        <Link to="/about" style={{ color: '#F5F2E8', fontWeight: 500 }}>
          About Us
        </Link>
      </nav>

      <div className="landing-hero">
        <h1>Paradise Nursery</h1>
        <p>
          Bring nature home with a curated collection of houseplants — from
          air-purifying favorites to low-maintenance companions, delivered
          straight to your door.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
