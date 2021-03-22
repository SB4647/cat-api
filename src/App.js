import "./App.css";
import { breedsArr } from "./data/breeds";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Routes from "./containers/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [breeds, setBreeds] = useState(
    breedsArr.map((breed) => ({ ...breed, isFav: false }))
  );
  const [displayedBreeds, setDisplayedBreeds] = useState(breeds);
  const [searchedBreed, setSearchedBreed] = useState("");

  console.log("breeds array is " + breeds);
  console.log("searchedBreed array is " + searchedBreed);
  console.log("displayedBreeds array is " + displayedBreeds);

  const toogleBreedFav = (name) => {
    setBreeds(
      breeds.map((breed) => {
        if (breed.name === name) {
          breed.isFav = !breed.isFav;
        }
        return breed;
      })
    );
  };

  useEffect(() => {
    if (searchedBreed === "") {
      setDisplayedBreeds(breeds);
      return;
    }
    const updateDisplayedBreed = breeds.filter(
      (breed) => breed.name === searchedBreed
    );
    setDisplayedBreeds(updateDisplayedBreed);
  }, [searchedBreed]);

  return (
    <div className="App">
      <Router>
        <Navigation
          paths={["/dashboard", "/favourites"]}
          setSearchedBreed={setSearchedBreed}
        />
        <Routes
          paths={["/dashboard", "/favourites"]}
          breeds={breeds}
          displayedBreeds={displayedBreeds}
          toogleBreedFav={toogleBreedFav}
        />
      </Router>
    </div>
  );
}

export default App;
