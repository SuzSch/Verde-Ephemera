import React from "react";
import './Cart.css';

function Cart({ cart, removeFromCart, floristItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((itemIndex, index) => (
          <li key={index}>
            <span>{floristItems[itemIndex].description} - {floristItems[itemIndex].price}</span>
            <span> <img src={floristItems[itemIndex].image}/></span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
