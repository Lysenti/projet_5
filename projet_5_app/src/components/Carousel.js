import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const visiblePictures = windowWidth <= 375 ? pictures.slice(0, 3) : pictures;

  return (
    <div className={`carousel ${windowWidth <= 375 ? 'carousel--column' : ''}`}>
      <img src={visiblePictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {visiblePictures.length > 1 && (
        <>
          <button className="carousel__button left" onClick={prevSlide}>❮</button>
          <button className="carousel__button right" onClick={nextSlide}>❯</button>
          <div className="carousel__counter">
            {currentIndex + 1}/{visiblePictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
