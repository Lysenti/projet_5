import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import Slideshow from './Slideshow';
import Banner from './Banner'; 
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
      <Banner imageUrl="url-de-votre-image" title="Détails du Logement" />
      <div className="logement">
        <Slideshow images={logement.pictures} />
        <h1>{logement.title}</h1>
        <p className="location">{logement.location}</p>
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="host">
          <div className="host-name">{logement.host.name}</div>
          <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
        </div>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < logement.rating ? 'star filled' : 'star'}>&#9733;</span>
          ))}
        </div>
        <div className="description">
          <button onClick={() => setShowDescription(!showDescription)}>
            Description
          </button>
          {showDescription && <p>{logement.description}</p>}
        </div>
        <div className="equipments">
          <button onClick={() => setShowEquipments(!showEquipments)}>
            Équipements
          </button>
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
  );
};

export default Logement;
