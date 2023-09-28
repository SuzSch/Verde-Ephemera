import React from 'react';

function Item({ title, description, price, image }) {
  return (
    <div className="item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Item;
