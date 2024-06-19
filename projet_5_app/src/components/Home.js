import React, { useState } from 'react';
import Banner from './Banner';
import Card from './Card';
import data from '../data.json';
import Pagination from './Pagination';
import './Home.scss';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(totalPages);
    } else if (pageNumber > totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="home">
      <Banner imageUrl="url-de-votre-image" title="Chez vous, partout et ailleurs" />
      <div className="home__cards">
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
