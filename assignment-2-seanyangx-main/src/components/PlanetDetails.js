import React from "react";
import { Link } from "react-router-dom";

const Film = ({ film }) => {
  if (!film) return <p>Film not found</p>;

  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
    url,
  } = film;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>Episode: {episode_id}</li>
        <li>Opening crawl: {opening_crawl}</li>
        <li>Director: {director}</li>
        <li>Producer: {producer}</li>
        <li>Release date: {release_date}</li>
        <li>
          Characters:
          <ul>
            {characters.map((character, index) => (
              <li key={index}>
                <Link to={character}>{character.split("/")[2]}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          Planets:
          <ul>
            {planets.map((planet, index) => (
              <li key={index}>
                <Link to={planet}>{planet.split("/")[2]}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Film;