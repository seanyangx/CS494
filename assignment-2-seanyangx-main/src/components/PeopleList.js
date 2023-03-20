import React from 'react';
import peopleData from '../data/people.json';

const PeopleList = () => {
  return (
    <div>
      <h2>People List</h2>
      <ul>
        {peopleData.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;