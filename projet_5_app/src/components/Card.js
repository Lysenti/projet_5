import React from 'react';
import './Card.scss';

const Card = ({ title, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default Card;
