import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [dogImages, setDogImages] = useState([]);
  const [amountOfImages, setAmountOfImages] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await axios(
        `https://dog.ceo/api/breeds/image/random/${amountOfImages}`
      );
      setDogImages(response.data.message);
    })();
  }, [amountOfImages]);

  const renderImages = () => {
    return dogImages.map(dogImage => {
      return (
        <div>
          <img height="200" width="200" src={dogImage} />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Dogs</h1>
      <div className="container">{dogImages && renderImages()}</div>
      <select onChange={e => setAmountOfImages(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </div>
  );
}

export default App;
