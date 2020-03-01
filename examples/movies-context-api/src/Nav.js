import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const movies = useContext(MovieContext);

  return (
    <div>
      <h3>Jamal</h3>
      <h3>Movie List {movies.length}</h3>
    </div>
  );
};

export default Nav;
