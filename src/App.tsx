import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './components';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner saying={'The Joel Hilton Movie Collection'} />
      <MovieList />
    </div>
  );
}

export default App;