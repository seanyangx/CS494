import React, { useEffect, useState } from 'react';
import planetsData from '../data/planets.json';
import Sidebar from '../components/Sidebar';
import Details from '../components/Details';

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    setPlanets(Object.values(planetsData));
  }, []);

  const handlePlanetClick = (index) => {
    setSelectedPlanet(planets[index]);
  };

  return (
    <div className="planets-page">
      <h2>Planets</h2>
      <div className="content-wrapper">
        <Sidebar items={planets} onItemClick={handlePlanetClick} />
        <Details item={selectedPlanet} />
      </div>
    </div>
  );
};

export default PlanetsPage;