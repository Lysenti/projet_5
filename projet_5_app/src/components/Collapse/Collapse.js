import React, { useState, useRef, useEffect } from 'react';
import './Collapse.scss';
import arrowIcon from '../../assets/arrow_back_ios-24px 1.png'; // Assurez-vous que ce chemin est correct

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      contentRef.current.style.opacity = '1';
    } else {
      contentRef.current.style.maxHeight = '0';
      contentRef.current.style.opacity = '0';
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <div className="collapse__header" onClick={handleToggle}>
        <h2>{title}</h2>
        <button className={`collapse__button ${isOpen ? 'open' : ''}`}>
          <img src={arrowIcon} alt="Arrow Icon" className="collapse__icon" />
        </button>
      </div>
      <div
        className="collapse__content"
        ref={contentRef}
      >
        <div className="collapse__text">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
