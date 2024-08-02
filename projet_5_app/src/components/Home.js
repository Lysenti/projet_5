import React, { useState, useEffect } from 'react';
import Card from './Card';
import data from '../data.json';
import Pagination from './Pagination';
import './Home.scss';
import Banner from './Banner';
import bannerImage from '../assets/bannerImage.png'; // Importez l'image de la bannière

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = windowWidth <= 375 ? 3 : 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        if (pageNumber < 1) {
          setCurrentPage(totalPages);
        } else if (pageNumber > totalPages) {
          setCurrentPage(1);
        } else {
          setCurrentPage(pageNumber);
        }
        setAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="home">
      <Banner 
        imageUrl={bannerImage} 
        title="Chez vous, partout et ailleurs" 
        filter="brightness(50%)" 
        boxShadow={true}
      />
      <div className={`home__cards ${animating ? 'fade-out' : 'fade-in'}`}>
        {currentItems.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} imageUrl={item.cover} />
        ))}
      </div>
      <div className="navigation-arrows">
        <button onClick={() => paginate(currentPage - 1)} className="arrow left-arrow">&laquo;</button>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <button onClick={() => paginate(currentPage + 1)} className="arrow right-arrow">&raquo;</button>
      </div>
    </div>
  );
};

export default Home;
