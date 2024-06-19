import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span className={`collapse__icon ${isOpen ? 'open' : ''}`}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Collapse;
