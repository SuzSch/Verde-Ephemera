import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  const { itemId } = useParams();
  return (
    <div>
      <h2>Item Details</h2>
      {/* Display item details here */}
    </div>
  );
}

export default ItemDetails;
