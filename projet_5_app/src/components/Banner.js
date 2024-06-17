import React from 'react';
import './Banner.scss';

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" className="banner__image" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
};

export default Banner;
