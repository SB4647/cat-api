import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Favourites from "../Favourites/Favourites";

const Routes = ({ paths, displayedBreeds, toogleBreedFav, breeds }) => {
  return (
    <Switch>
      <Route path={paths[0]} exact>
        <Dashboard
          displayedBreeds={displayedBreeds}
          toogleBreedFav={toogleBreedFav}
        />
      </Route>
      <Route path={paths[1]}>
        <Favourites breeds={breeds} toogleBreedFav={toogleBreedFav} />
      </Route>
    </Switch>
  );
};

export default Routes;
