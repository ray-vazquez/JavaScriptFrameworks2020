import React from "react";
import movies from "../../assets/movies.js";

function NowPlaying() {
  return (
    <div>
      <h1>Now Playing</h1>
      <div className="row">
        {Object.entries(movies).map(entry => {
          const [movieKey, movie] = entry;
          const link = "/movie/" + movieKey;
          return (
            <div className="col mb-4" key={movieKey}>
              <h2>
                <a href={link}>{movie.title}</a>
              </h2>
              <a href={link}>
                <img src={movie.poster} alt="" width="180" height="270" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NowPlaying;
