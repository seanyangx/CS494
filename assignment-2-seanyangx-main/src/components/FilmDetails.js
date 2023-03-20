import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmDetail = ({ data }) => {
  const { id } = useParams();
  const film = data[id];

  if (!film) {
    return <p>Film not found</p>;
  }

  const { title, episode_id, opening_crawl, director, producer, release_date, characters, planets } = film;

  return (
  <div>
  <h2>{title}</h2>
  <p>Episode: {episode_id}</p>
  <p>Opening Crawl:</p>
  <pre>{opening_crawl}</pre>
  <p>Director: {director}</p>
  <p>Producer: {producer}</p>
  <p>Release Date: {release_date}</p>
  <p>Characters:</p>
  <ul>
  {characters.map(character => (
  <li key={character}>
  <Link to={character}>{character}</Link>
  </li>
  ))}
  </ul>
  <p>Planets:</p>
  <ul>
  {planets.map(planet => (
  <li key={planet}>
  <Link to={planet}>{planet}</Link>
  </li>
  ))}
  </ul>
  </div>
  );
  };
  
  export default FilmDetail;