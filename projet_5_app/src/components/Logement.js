import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import Slideshow from './Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Logement.scss';

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-container">
      <div className="logement">
        <Slideshow images={logement.pictures} />
        <div className="logement-header">
          <h1>{logement.title}</h1>
          <div className="host">
            <div className="host-name">{logement.host.name}</div>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
        <p className="location">{logement.location}</p>
        <div className="tags-rating">
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < logement.rating ? 'star filled' : 'star'}>&#9733;</span>
            ))}
          </div>
        </div>
        <div className="collapse-container">
          <div className="description">
            <div className="collapse-header" onClick={() => setShowDescription(!showDescription)}>
              <button>
                Description
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`collapse-icon ${showDescription ? 'rotate' : ''}`} 
                />
              </button>
            </div>
            {showDescription && <p>{logement.description}</p>}
          </div>
          <div className="equipments">
            <div className="collapse-header" onClick={() => setShowEquipments(!showEquipments)}>
              <button>
                Équipements
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`collapse-icon ${showEquipments ? 'rotate' : ''}`} 
                />
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
