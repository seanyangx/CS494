import React, { useEffect, useState } from 'react';
import filmsData from '../data/films.json';
import Sidebar from '../components/Sidebar';
import Details from '../components/Details';

const FilmsPage = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    setFilms(Object.values(filmsData));
  }, []);

  const handleFilmClick = (index) => {
    setSelectedFilm(films[index]);
  };

  return (
    <div className="films-page">
      <h2>Films</h2>
      <div className="content-wrapper">
        <Sidebar items={films} onItemClick={handleFilmClick} />
        <Details item={selectedFilm} />
      </div>
    </div>
  );
};

export default FilmsPage;