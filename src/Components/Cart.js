import React from 'react';

function Cart({ items, onRemoveItem, onCheckout }) {
  // Implement the shopping cart UI and functionality here
  // You can map through the 'items' array to display each item in the cart
  // Add buttons or actions to remove items and proceed to checkout
  return (
    <div className="cart">
      
      {items.map((item, index) => (
        <div itemId={index} className="cart-item">
          
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => onRemoveItem(index)}>Remove</button>
        </div>
      ))}
      <p>Total: ${items.reduce((total, item) => total + item.price, 0)}</p>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;
