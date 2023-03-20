import React from 'react';
import planetsData from '../data/planets.json';

const PlanetsList = () => {
  return (
    <div>
      <h2>Planets List</h2>
      <ul>
        {planetsData.map((planet) => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetsList;