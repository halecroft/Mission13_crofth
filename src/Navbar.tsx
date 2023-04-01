import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/podcasts">My Podcasts</Link>
        </li>
        <li>
          <Link to="/movielist">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
