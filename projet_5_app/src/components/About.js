import React from 'react';
import Collapse from './Collapse';
import Banner from './Banner';
import aboutBannerImage from '../assets/AboutImage.png';
import './About.scss';

const About = () => {
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

  return (
    <div className="about">
      <Banner imageUrl={aboutBannerImage} filter="brightness(80%)" />
      <div className="about__collapses">
        {collapsesData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default About;
