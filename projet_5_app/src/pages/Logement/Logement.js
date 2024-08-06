import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../../data.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse';
import './Logement.scss';
import starActive from '../../assets/star-active 1.png';
import starInactive from '../../assets/star-inactive.png';

const Logement = () => {
  const totalStars = 5;
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

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
              {Array.from({ length: totalStars }, (_, index) => (
                <img
                  key={index}
                  src={index < logement.rating ? starActive : starInactive}
                  alt={index < logement.rating ? 'Active Star' : 'Inactive Star'}
                  className="star"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="collapse-container">
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Équipements"
            content={(
              <ul>
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Logement;
