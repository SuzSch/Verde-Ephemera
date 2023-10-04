import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail({ libraryItems }) {
  const { itemId } = useParams();

  // Find the item with the matching itemId
  const item = libraryItems.find((item) => item.itemId === Number(itemId));

  return (
    <div>
      <h2>Item Details</h2>
      {item ? (
        <div>
          <h3>Title: {item.title}</h3>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default ItemDetail;
