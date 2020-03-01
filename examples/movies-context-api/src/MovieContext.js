import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124
    },
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124
    },
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};
