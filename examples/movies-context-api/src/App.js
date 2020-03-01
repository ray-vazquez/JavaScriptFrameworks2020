import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MoviesList from "./MoviesList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
