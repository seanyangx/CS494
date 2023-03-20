import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-brand" to="/">
        Star Wars
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/people" activeClassName="active">
          People
        </NavLink>
        <NavLink to="/planets" activeClassName="active">
          Planets
        </NavLink>
        <NavLink to="/films" activeClassName="active">
          Films
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;