import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ title, imageUrl, id }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={imageUrl} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
    </Link>
  );
};

export default Card;

