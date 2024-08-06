import React, { useState, useEffect } from 'react';
import './Slideshow.scss';
import arrowBack from '../../assets/arrow_back_ios-24px 1.png';
import arrowForward from '../../assets/arrow_forward_ios-24px 1.png';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 500); // Durée de l'animation prolongée à 0.5 seconde

      return () => clearTimeout(timer);
    }
  }, [animating]);

  const nextSlide = () => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }, 500);
    }
  };

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <button onClick={prevSlide} className="arrow left-arrow">
        <img src={arrowBack} alt="Previous" />
        </button>
      )}
      <div className="slide-container">
        {images.map((image, index) => (
          <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''} ${animating ? 'animating' : ''}`}
        >
          <img src={image} alt="Slideshow" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <button onClick={nextSlide} className="arrow right-arrow">
          <img src={arrowForward} alt="Next" />
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
