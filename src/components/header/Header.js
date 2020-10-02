import React from 'react';

import { NavLink } from 'react-router-dom';

import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Twitch Octo</h1>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active-header">Home</NavLink></li>
          <li><NavLink activeClassName="active-header" to="/games">Games</NavLink></li>
          <li><NavLink activeClassName="active-header" to="/streamers">Streamers</NavLink></li>
          <li>Stats</li>
          <li><input 
            className="header-search" 
            id="bar-search" 
            placeholder="Search..." />
          </li>
          <li><button className="header-signup">Sign up</button></li>
        </ul>
      </nav>
    </header>
  )
}
