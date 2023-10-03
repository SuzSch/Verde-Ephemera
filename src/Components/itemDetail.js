import React from 'react';
import Item from './Item';

function ItemDetail() {
  return (
    <div className="item-detail">
      {items.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          buttonText={buttonText}
          onButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
}

export default ItemDetail;
