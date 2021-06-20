import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Favourites from "../Favourites/Favourites";

const Routes = ({
    paths,
    displayedBreeds,
    toogleBreedFav,
    breeds,
    setSearchedBreed,
}) => {
    const favouriteBreeds = breeds.filter((breed) => breed.isFav);

    return (
        <Switch>
            <Route path={paths[0]} exact>
                <Home
                    breeds={breeds}
                    displayedBreeds={displayedBreeds}
                    toogleBreedFav={toogleBreedFav}
                    setSearchedBreed={setSearchedBreed}
                />
            </Route>
            <Route path={paths[1]}>
                <Favourites
                    favouriteBreeds={favouriteBreeds}
                    toogleBreedFav={toogleBreedFav}
                />
            </Route>
        </Switch>
    );
};

export default Routes;
