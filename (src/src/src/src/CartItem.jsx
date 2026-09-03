import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const calculateItemTotal = (item) => (item.price * item.quantity).toFixed(2);

  const calculateTotalAmount = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout is not yet available.');
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

      <div className="cart-page">
        <h2 className="cart-total">Total: ${calculateTotalAmount()}</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Time to add some greenery!</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-unit-price">${item.price.toFixed(2)} each</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <span className="cart-item-total">${calculateItemTotal(item)}</span>
              <button className="delete-btn" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </div>
          ))
        )}

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
