import React from "react";
import styles from "./Favourites.module.scss";
import BreedList from "../../components/BreedList/BreedList";

const Favourites = ({ breeds, toogleBreedFav }) => {
  const favouriteBreeds = breeds.filter((breed) => breed.isFav);

  const contentJsx = favouriteBreeds.length ? (
    <BreedList
      breedsToDisplay={favouriteBreeds}
      toogleBreedFav={toogleBreedFav}
    />
  ) : (
    <p>No favourites to show</p>
  );

  return <section className={styles.contents}>{contentJsx}</section>;
};

export default Favourites;
