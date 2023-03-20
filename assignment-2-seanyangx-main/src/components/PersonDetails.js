import React from "react";
import { Link } from "react-router-dom";

const Person = ({ person }) => {
  if (!person) return <p>Person not found</p>;

  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, url } = person;

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>Height: {height}</li>
        <li>Mass: {mass}</li>
        <li>Hair color: {hair_color}</li>
        <li>Skin color: {skin_color}</li>
        <li>Eye color: {eye_color}</li>
        <li>Birth year: {birth_year}</li>
        <li>Gender: {gender}</li>
    <li>
      Homeworld: <Link to={homeworld}>{homeworld.split("/")[2]}</Link>
    </li>
    <li>
      Films:
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            <Link to={film}>{film.split("/")[2]}</Link>
          </li>
        ))}
      </ul>
    </li>
  </ul>
</div>
);
};

export default Person;