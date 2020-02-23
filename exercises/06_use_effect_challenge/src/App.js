import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [allCharacters, setAllCharacters] = useState();
  const [image, setImage] = useState(
    "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
  );

  useEffect(() => {
    async function getData() {
      const response = await axios(
        "https://rickandmortyapi.com/api/character/"
      );
      console.log({ response });
      setAllCharacters(response.data.results);
    }
    getData();
  }, []);

  async function getCharacter(characterId) {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${characterId}`
      );
      setImage(response.data.image);
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">Rick Sanchez</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img
              className="img-rounded"
              alt="Get Schwifty"
              id="get-schwifty"
              src={image}
              height="250"
            />
          </a>
          <p id="photo-caption">
            <em>Rick and his homies, gettin' schwifty.</em>
          </p>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select
              id="dropdown"
              type="text"
              onChange={e => getCharacter(e.currentTarget.value)}
            >
              {allCharacters &&
                allCharacters.map((character, index) => (
                  <option value={index + 1} data-id={index} key={character.id}>
                    {character.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
