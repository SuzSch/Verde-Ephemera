import React from 'react';
import './Item.css'; 

function Item({ title, description, price, image, buttonText, onButtonClick }) {


  return (

    <div class="card">
      <div class="content">
        <div class="front">
          <img src={image} alt={title} />
          <p class="subtitle">Hover me</p>
        </div>

        <div class="back">
          <p class="description">
            Cool description so you can read it too my friend
          </p>
        </div>
      </div>
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


