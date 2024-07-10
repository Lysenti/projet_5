import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <button className={`collapse__button ${isOpen ? 'open' : ''}`}>
          <FontAwesomeIcon icon={faAngleUp} className={`collapse__icon ${isOpen ? 'open' : ''}`} />
        </button>
      </div>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
};

export default Collapse;
