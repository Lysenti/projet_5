import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <button onClick={prevSlide} className="arrow left-arrow">
          &laquo;
        </button>
      )}
      <img src={images[currentIndex]} alt="Slideshow" className="slide" />
      {images.length > 1 && (
        <button onClick={nextSlide} className="arrow right-arrow">
          &raquo;
        </button>
      )}
      {images.length > 1 && (
        <div className="slide-number">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;

