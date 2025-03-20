import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateQuantity } from '../actions/cartActions';

const Cart = ({ items, removeFromCart, updateQuantity }) => {
  const handleQuantityChange = (id, event) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  if (items.length === 0) {
    return <div className="cart-empty">Your cart is empty</div>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <div className="cart-item-actions">
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </label>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items
});

export default connect(mapStateToProps, { removeFromCart, updateQuantity })(Cart);