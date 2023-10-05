import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Item from './Item';
import './ItemList.css';

function ItemList({ items, buttonText, onBuyMe }) {
  const navigate = useNavigate();

  const handleButtonClick = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.itemId}
          item={item}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          buttonText={buttonText}
          onButtonClick={() => handleButtonClick(item.itemId)}
        />
      ))}
    </div>
  );
}

export default ItemList;
