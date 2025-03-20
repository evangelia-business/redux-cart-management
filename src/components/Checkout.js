import React, { useState } from 'react';
// TODO: Connect this component to Redux

const Checkout = ({ items, subtotal, tax, shipping, total, applyDiscount }) => {
  const [discountCode, setDiscountCode] = useState('');

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      applyDiscount(discountCode);
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="discount">
        <input
          type="text"
          placeholder="Discount Code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button onClick={handleApplyDiscount}>Apply</button>
      </div>
      <div className="checkout-summary">
        <div className="checkout-row">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="checkout-row">
          <span>Tax ({(tax * 100).toFixed(0)}%):</span>
          <span>${(subtotal * tax).toFixed(2)}</span>
        </div>
        <div className="checkout-row">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        {/* Display discount if applied */}
        <div className="checkout-row total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="checkout-button">Complete Purchase</button>
    </div>
  );
};

// TODO: Implement mapStateToProps and connect the component to Redux

export default Checkout;