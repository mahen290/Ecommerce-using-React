import React from 'react';
import './Card.css';

function Card( { source, name, cost } ) 
{
  return (
    <div>
      <div className = "card">
        <img className = "image-style" src = { source } alt = "product-image" />
        <p className = "title"> { name } </p>
        <p className = "price"> Price : $ { cost } </p>
      </div>
    </div>
  );
}

export default Card;
