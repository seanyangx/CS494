import React from 'react';
import filmsData from '../data/films.json';

const FilmsList = () => {
  return (
    <div>
      <h2>Films List</h2>
      <ul>
        {filmsData.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsList;