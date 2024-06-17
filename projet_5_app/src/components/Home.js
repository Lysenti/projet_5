import React from 'react';
import Banner from './Banner';
import Card from './Card';
import data from '../data.json';
import './Home.scss';

const Home = () => {
    return (
      <div className="home">
        <Banner imageUrl="url-de-votre-image" title="Chez vous, partout et ailleurs" />
        <div className="home__cards">
          {data.map((item) => (
            <Card key={item.id} title={item.title} imageUrl={item.cover} />
          ))}
        </div>
      </div>
    );
  };

export default Home;
