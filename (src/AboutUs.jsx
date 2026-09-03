import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div>
      <nav className="navbar">
        <span className="brand">Paradise Nursery</span>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Plants</Link></li>
          <li><Link to="/cart">🛒</Link></li>
        </ul>
      </nav>

      <div className="product-page" style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h2 className="category-heading" style={{ borderBottom: 'none' }}>About Paradise Nursery</h2>
        <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
          Paradise Nursery started with a simple idea: bringing the outdoors in
          shouldn't be complicated. We're a small team of plant enthusiasts who
          believe every home deserves a little more green, whether you have a
          sun-drenched balcony or a single windowsill.
        </p>
        <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
          Every plant in our shop is hand-selected for quality and hardiness,
          and organized to help you find exactly what fits your space and
          lifestyle — from air-purifying favorites to low-maintenance
          companions for first-time plant parents.
        </p>
        <p style={{ lineHeight: 1.7 }}>
          Our mission is to make plant parenthood approachable, affordable,
          and genuinely enjoyable. Thanks for growing with us.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
