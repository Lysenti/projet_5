import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../data.json';
import Slideshow from './Slideshow';
import './Logement.scss';

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  if (!logement) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="logement-container">
      <div className="logement">
        <Slideshow images={logement.pictures} />
        <div className="logement-content">
          <div className="logement-details">
            <div className="logement-header">
              <h1>{logement.title}</h1>
            </div>
            <div className="location">{logement.location}</div>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="rating-host">
            <div className="host-container">
              <div className="host-name">{logement.host.name}</div>
              <div className="host-picture-container">
                <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
              </div>
            </div>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < logement.rating ? 'star filled' : 'star'}>&#9733;</span>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse-container">
          <div className="description">
            <div className="collapse-header">
              <button onClick={() => setShowDescription(!showDescription)}>
                Description
                <span className={`collapse-icon ${showDescription ? 'rotate' : ''}`}>&#9660;</span>
              </button>
            </div>
            {showDescription && <p>{logement.description}</p>}
          </div>
          <div className="equipments">
            <div className="collapse-header">
              <button onClick={() => setShowEquipments(!showEquipments)}>
                Équipements
                <span className={`collapse-icon ${showEquipments ? 'rotate' : ''}`}>&#9660;</span>
              </button>
            </div>
            {showEquipments && (
              <ul>
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logement;
