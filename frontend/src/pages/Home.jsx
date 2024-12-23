import React from "react";
import { useState } from "react";

import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "mule", release_date: "2029" },
    { id: 2, title: "shuga", release_date: "2029" },
    { id: 3, title: "raise", release_date: "2029" },
    { id: 4, title: "thunder", release_date: "2029" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="movie-grid">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {movies.map((movie) => {
        return (
         
            <MovieCard movie={movie} key={movie.id} />
          )
      })}
    </div>
  );
};

export default Home;
