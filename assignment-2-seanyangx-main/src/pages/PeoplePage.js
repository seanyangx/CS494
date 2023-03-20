import React, { useEffect, useState } from 'react';
import peopleData from '../data/people.json';
import Sidebar from '../components/Sidebar';
import Details from '../components/Details';

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    setPeople(Object.values(peopleData));
  }, []);

  const handlePersonClick = (index) => {
    setSelectedPerson(people[index]);
  };

  return (
    <div className="people-page">
      <h2>People</h2>
      <div className="content-wrapper">
        <Sidebar items={people} onItemClick={handlePersonClick} />
        <Details item={selectedPerson} />
      </div>
    </div>
  );
};

export default PeoplePage;