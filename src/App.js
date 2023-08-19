import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=3b174b97";

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MOVIELAND</h1>
      <div className="search">
        <input
          placeholder="Write something..."
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>
      <div className="container"></div>
    </div>
  );
}

export default App;
