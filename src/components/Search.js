import React, { useState } from "react";
import Usefetch from "../hooks/UseFetch";

const Search = () => {
  const [search, setSearch] = useState("");

  if (search === "") {
    setSearch("all");
  }

  const {
    data: movies,
    isPending,
    error,
  } = Usefetch(
    `https://www.omdbapi.com/?apikey=6c3e3644&s=${search}&type=movie`
  );

  const { data: series } = Usefetch(
    `https://www.omdbapi.com/?apikey=6c3e3644&s=${search}&type=series`
  );

  return (
    <div className="search">
      <div className="searchInput">
        <form action="">
          <label htmlFor="">Search</label>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>{" "}
      </div>

      <div className="moviesCategory">
        <div className="moviesHeading">
          <h1>Movies</h1>
        </div>
        {error && <div className="error">{error}</div>}
        {isPending && <div className="loading">Loading...</div>}
        {movies && (
          <div className="moviesDisplay">
            {movies.map((movie, index) => (
              <div className="movie" key={index}>
                <p>{movie.Title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="seriesCategory">
        <div className="seriesHeading">
          <h1>Series</h1>
        </div>
        {error && <div className="error">{error}</div>}
        {isPending && <div className="loading">Loading...</div>}
        {movies && (
          <div className="seriesDisplay">
            {series.map((serie, index) => (
              <div className="series" key={index}>
                <p>{serie.Title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
