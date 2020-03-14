import React from "react";

import movies from "../../assets/movies.js";

function Movie(props) {
  /**
   * Change me so that I am getting the movie from the route
   */
  const movieKey = "a-star-is-born";
  const movie = movies[movieKey];
  return (
    <div>
      <h1>{movie.title}</h1>
      <div>
        <img
          src={movie.poster}
          alt=""
          width="240"
          height="360"
          className="mb-3"
        />
      </div>
      <p>{movie.synopsis}</p>
      <p>
        <strong>Release Date</strong> {movie.releaseDate}
      </p>
      <div>
        <strong>Show Times</strong>
        <ul>
          {movie.times.map((time, index) => {
            const timeKey = `${movieKey}-time-${index}`;
            return <li key={timeKey}>{time}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
