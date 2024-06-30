import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <button>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
};

export default Collapse;
