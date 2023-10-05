import React from "react";
import './Cart.css';

function Cart({ cart, removeFromCart, floristItems }) {

  function calculateTotalPrice(cart, floristItems) {
    let totalPrice = 0;
    for (const itemIndex of cart) {
      totalPrice += parseFloat(floristItems[itemIndex].price.replace('$', ''));
    }

    return totalPrice.toFixed(2);
  }

  const totalPrice = calculateTotalPrice(cart, floristItems);
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((itemIndex, index) => (
          <li key={index}>
            <span>{floristItems[itemIndex].description} - {floristItems[itemIndex].price}</span>
            <span> <img src={floristItems[itemIndex].image} /></span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total Price:</strong> ${totalPrice}
      </div>
    </div>
  );
}

export default Cart;
