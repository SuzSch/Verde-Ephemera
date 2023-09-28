import React from 'react';
import './Item.css'; 

function Item({ title, description, price, image, buttonText, onButtonClick }) {


  return (


    <div class="card">
      <img src={image} alt={title} />
  <div class="overlay"></div>
  <button className="card-btn" onClick={onButtonClick}>{buttonText}</button>
</div>

    // <div className="item">
    //   <img src={image} alt={title} />
    //   <h3>{title}</h3>
    //   <p>{description}</p>
    //   <p>{price}</p>
    //   <button className="item-button" onClick={onButtonClick}>{buttonText}</button>
    // </div>
   
  );
}

export default Item;


