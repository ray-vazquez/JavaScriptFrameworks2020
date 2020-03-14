import React from "react";
import NavBar from "../NavBar/NavBar";
import NowPlaying from "../NowPlaying/NowPlaying";
import Theatres from "../Theatres/Theatres";
import Movie from "../Movie/Movie";
import Subscribe from "../Subscribe/Subscribe";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <NowPlaying />
      </main>
      <div className="container">
        <Subscribe />
      </div>
    </div>
  );
}

export default App;
