import React from 'react';
import data from '../data.json';

function Appartements() {
  return (
    <div>
      <h1>Liste des appartements</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.cover} alt={item.title} />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appartements;
