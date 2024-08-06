import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import aboutBannerImage from '../../assets/AboutImage.png'; 
import Collapse from '../Collapse/Collapse';
import '../../styles/Variables.scss'; 
import '../../styles/Mixins.scss'; 
import './About.scss'; 

const About = () => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const collapsesData = [
    {
      title: <span className="highlight">Fiabilité</span>,
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    },
    {
      title: <span className="highlight">Respect</span>,
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: <span className="highlight">Service</span>,
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: <span className="highlight">Sécurité</span>,
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    }
  ];

  const handleCollapseToggle = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  return (
    <div className="about">
      <Banner imageUrl={aboutBannerImage} filter="brightness(80%)" />
      <div className={`layout__main ${isCollapseOpen ? 'no-padding collapse-open' : 'no-padding'}`}>
        <div className="about__collapses">
          {collapsesData.map((item, index) => (
            <Collapse key={index} title={item.title} content={item.content} onToggle={handleCollapseToggle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
