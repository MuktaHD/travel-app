import React, { useState } from 'react';
import './TravelCard.css';
function TravelCard({ card, onDelete }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='container  '  >    
    
    <div className="travel-card  ">
      <img src={card.img} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{card.price}</p>
      <p>
        {showMore ? card.description : `${card.description.substring(0, 50)}...`}
        <span onClick={() => setShowMore(!showMore)} className="toggle-link">
          {showMore ? 'Read Less' : 'Read More'}
        </span>
      </p>
      <button onClick={() => onDelete(card.id)} className="delete-button">Delete</button>
    </div>
    </div>
  );
}

export default TravelCard;
