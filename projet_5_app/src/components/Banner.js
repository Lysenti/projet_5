import React from 'react';
import './Banner.scss';

const Banner = ({ imageUrl, title, filter, boxShadow }) => {
  return (
    <div className={`banner ${boxShadow ? 'box-shadow' : ''}`}>
      <img src={imageUrl} alt="Banner" className="banner__image" style={{ filter }} />
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

export default Banner;
