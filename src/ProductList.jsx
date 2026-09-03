import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice';

const plantCategories = [
  {
    category: 'Air-Purifying Plants',
    plants: [
      { name: 'Snake Plant', price: 24.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?q=80&w=400&auto=format&fit=crop' },
      { name: 'Peace Lily', price: 29.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=400&auto=format&fit=crop' },
      { name: 'Spider Plant', price: 18.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?q=80&w=400&auto=format&fit=crop' },
      { name: 'Boston Fern', price: 21.5, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=400&auto=format&fit=crop' },
      { name: 'Areca Palm', price: 34.99, image: 'https://images.unsplash.com/photo-1545165375-1b744b9ed444?q=80&w=400&auto=format&fit=crop' },
      { name: 'Rubber Plant', price: 27.0, image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Low-Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', price: 26.99, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=400&auto=format&fit=crop' },
      { name: 'Pothos', price: 16.99, image: 'https://images.unsplash.com/photo-1622557850710-9b7c7b40f7ba?q=80&w=400&auto=format&fit=crop' },
      { name: 'Aloe Vera', price: 15.5, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=400&auto=format&fit=crop' },
      { name: 'Jade Plant', price: 19.99, image: 'https://images.unsplash.com/photo-1616500163246-742e0a3cba38?q=80&w=400&auto=format&fit=crop' },
      { name: 'Cast Iron Plant', price: 23.99, image: 'https://images.unsplash.com/photo-1598880940639-42a5d5bf5f68?q=80&w=400&auto=format&fit=crop' },
      { name: 'Ponytail Palm', price: 32.0, image: 'https://images.unsplash.com/photo-1583083527882-af5b8e2b0f19?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', price: 14.99, image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=400&auto=format&fit=crop' },
      { name: 'Rosemary', price: 12.99, image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=400&auto=format&fit=crop' },
      { name: 'Mint', price: 9.99, image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=400&auto=format&fit=crop' },
      { name: 'Basil', price: 8.99, image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?q=80&w=400&auto=format&fit=crop' },
      { name: 'Jasmine', price: 22.5, image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?q=80&w=400&auto=format&fit=crop' },
      { name: 'Eucalyptus', price: 20.0, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400&auto=format&fit=crop' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [addedPlants, setAddedPlants] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedPlants((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <nav className="navbar">
        <span className="brand">Paradise Nursery</span>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Plants</Link></li>
          <li>
            <Link to="/cart" className="cart-icon-wrapper">
              🛒
              <span className="cart-count">{totalItemsInCart}</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="product-page">
        {plantCategories.map((cat) => (
          <div key={cat.category}>
            <h2 className="category-heading">{cat.category}</h2>
            <div className="product-grid">
              {cat.plants.map((plant) => (
                <div className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <span className="product-price">${plant.price.toFixed(2)}</span>
                    <button
                      className="add-to-cart-btn"
                      disabled={!!addedPlants[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedPlants[plant.name] ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
