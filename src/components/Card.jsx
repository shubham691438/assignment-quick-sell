import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <span className="card-id">{card.id}</span>
        </div>
        <h3 className="card-title">{card.title}</h3>
        <div className="card-badges">
          <span className="card-badge alert-icon">!</span>
          <span className="card-badge feature-request">Feature Request</span>
        </div>
      </div>
      <div className="card-avatar">
        {card.assignedTo ? (
          <img src={`https://via.placeholder.com/32`} alt="Profile" />
        ) : (
          <span className="no-avatar" />
        )}
      </div>
    </div>
  );
};

export default Card;