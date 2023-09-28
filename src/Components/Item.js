import React from 'react';

function Item({ title, description, price, image, buttonText, onButtonClick }) {


  return (
    <div className="item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
   
  );
}

export default Item;


