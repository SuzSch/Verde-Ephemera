import React from 'react';
import Item from './Item';
import './ItemList.css'; 

function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ItemList;
