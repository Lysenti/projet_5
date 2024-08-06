import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ title, imageUrl, id }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div className="card__image-container">
        <img src={imageUrl} alt={title} className="card__image" />
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
