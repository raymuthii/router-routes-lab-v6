// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Home
      </NavLink>
      <NavLink 
        to="/actors" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Actors
      </NavLink>
      <NavLink 
        to="/movies" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Movies
      </NavLink>
      <NavLink 
        to="/directors" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Directors
      </NavLink>
    </nav>
  );
};

export default NavBar;
