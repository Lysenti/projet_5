import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './Collapse.scss';

const Collapse = ({ title, content, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    if (onToggle) onToggle();
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <button className={`collapse__button ${isOpen ? 'open' : ''}`}>
          <FontAwesomeIcon icon={faAngleUp} className={`collapse__icon ${isOpen ? 'open' : ''}`} />
        </button>
      </div>
      <div
        ref={contentRef}
        className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}
        style={{ height }}
      >
        <div className="collapse__text">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
