import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import data from '../../data.json';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import bannerImage from '../../assets/bannerImage.png'; 

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
      <Banner 
        imageUrl={bannerImage} 
        title="Chez vous, partout et ailleurs" 
        filter="brightness(50%)" 
        boxShadow={true}
      />
      <div className="home__cards">
        {data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} imageUrl={item.cover} />
        ))}
      </div>
    </div>
  );
};

export default Home;
