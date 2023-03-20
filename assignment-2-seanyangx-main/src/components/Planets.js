import React from 'react';
import PlanetsList from './PlanetsList';

const Planets = () => {
  return (
    <div>
      <h1>Planets Page</h1>
      <p>Here you can see information about the planets in the Star Wars universe.</p>
      <PlanetsList />
    </div>
  );
};

export default Planets;