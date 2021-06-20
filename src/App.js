import "./App.css";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Routes from "./containers/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    const [breeds, setBreeds] = useState([]);
    const [displayedBreeds, setDisplayedBreeds] = useState([]);
    const [searchedBreed, setSearchedBreed] = useState("");

    //function that returns an array of objects. Each Object contains information assocoiated with a specific breed of cat.
    //Note - not all image urls are included
    const getBreedData = async () => {
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await response.json();
        //intialise isFav property to false for all breeds
        const dataUpdate = await data.map((breed) => ({
            ...breed,
            isFav: false,
        }));

        return await dataUpdate;
    };

    //function that returns an array containing image urls for all breeds of cats
    const getBreedImageURLs = async (breedData) => {
        //Request the image data for each cat breed
        const results = breedData.map(async (breed) => {
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`,
                {
                    method: "GET",
                    headers: {
                        "x-api-key": "8e9abc3a-02a2-4700-81a4-58b4998c763b",
                    },
                }
            );

            //convert response into JSON
            const jsonReponse = await response.json();

            //return the URL to the cat image
            return await jsonReponse[0].url;
        });

        //return an array of the image urls once all of the reponses are received
        return await Promise.all(results);
    };

    //function that sets "displayBreeds" state to all breed data
    const setDisplayAllBreeds = () => {
        setDisplayedBreeds(breeds);
    };

    //function that gets the data for a specific breed from the breeds data
    const getDataforBreed = (breedName) => {
        return breeds.filter((breed) => breed.name === breedName);
    };

    useEffect(() => {
        //If "Select all" selected from drop down menu, then set "displayBreeds" state to all breed data
        if (searchedBreed === "select-all") {
            setDisplayAllBreeds();
            return;
        }

        //get data for the searched breed
        const updateDisplayedBreed = getDataforBreed(searchedBreed);

        setDisplayedBreeds(updateDisplayedBreed);
    }, [searchedBreed]);

    useEffect(() => {
        let breedData = [];
        let breedImageURLs = [];

        //setBreedData function retrieves an array of data for all breeds of cat which is then set as the "breeds" state
        //Due to the API design, Image urls need to retived seperate from the rest of the cat data
        const setBreedData = async () => {
            //attempt to get breed data (without image URls). Throw error if failed.
            try {
                breedData = await getBreedData();
            } catch (error) {
                throw new Error("Could not get breed data from API");
            }

            //attempt to get the cat breed image URLs. Throw error if failed.
            try {
                breedImageURLs = await getBreedImageURLs(breedData);
            } catch (error) {
                throw new Error("Could not get breed image URLs from API");
            }

            //merge the image urls into the breed data recieved initally
            const updateBreedsData = breedData.map((breed, index) => ({
                ...breed,
                url: breedImageURLs[index],
            }));

            //set the "breeds" state equal to the data recieved
            setBreeds(updateBreedsData);
        };

        //invoke setBreedData function declared above
        setBreedData();
    }, []);

    //function that toogles the inFav property of a specific breed inside of breed data
    const toogleBreedFav = (name) => {
        setBreeds(
            breeds.map((breed) => ({
                ...breed,
                isFav: breed.name === name ? !breed.isFav : breed.isFav,
            }))
        );
    };

    return (
        <div className="App">
            <Router>
                <Navigation paths={["/", "/favourites"]} />
                <Routes
                    paths={["/", "/favourites"]}
                    breeds={breeds}
                    displayedBreeds={displayedBreeds}
                    toogleBreedFav={toogleBreedFav}
                    setSearchedBreed={setSearchedBreed}
                />
            </Router>
        </div>
    );
}

export default App;
