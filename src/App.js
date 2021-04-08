import "./App.css";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Routes from "./containers/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    const [breeds, setBreeds] = useState([]);
    const [displayedBreeds, setDisplayedBreeds] = useState([]);
    const [searchedBreed, setSearchedBreed] = useState("");

    const setBreedData = async () => {
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await response.json();
        const dataUpdate = await data.map((breed) => ({
            ...breed,
            isFav: false,
        }));

        setBreeds(dataUpdate);

        const urls = await setBreedImageURL();
        console.log(urls);
    };

    const setBreedImageURL = async () => {
        const results = breeds.map(async (breed) => {
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`,
                {
                    method: "GET",
                    headers: {
                        "x-api-key": "8e9abc3a-02a2-4700-81a4-58b4998c763b",
                    },
                }
            );

            return (await response.json()).url;
        });

        return await Promise.all(results);

        // const myFunction = async () => {
        //     const breeds = [1,2,3,4,5,6,7,8,9];
        //     const promises = breeds.map(async (breedId) => {
        //        const data = await fetch(`url/${breedId}`)
        //         return (await data.json()).url;
        //     });
        //     const urls = await Promise.all(promises);
        // }
    };

    useEffect(() => {
        if (searchedBreed === "select-all") {
            setDisplayedBreeds(breeds);
            return;
        }

        const updateDisplayedBreed = breeds.filter(
            (breed) => breed.name === searchedBreed
        );
        setDisplayedBreeds(updateDisplayedBreed);
    }, [searchedBreed]);

    useEffect(() => {
        setDisplayedBreeds(breeds);
    }, [breeds]);

    useEffect(async () => {
        await setBreedData();
    }, []);

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

    return (
        <div className="App">
            <Router>
                <Navigation
                    paths={["/dashboard", "/favourites"]}
                    setSearchedBreed={setSearchedBreed}
                    breedsData={breeds}
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
