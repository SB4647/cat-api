import React from "react";
import styles from "./Favourites.module.scss";
import BreedList from "../../components/BreedList/BreedList";

const Favourites = ({ favouriteBreeds, toogleBreedFav }) => {
    return (
        <div className={styles.contents}>
            <h1 className={styles.contents__heading}>FAVOURITES</h1>
            {favouriteBreeds.length ? (
                <BreedList
                    breedsToDisplay={favouriteBreeds}
                    toogleBreedFav={toogleBreedFav}
                />
            ) : (
                <p className={styles.contents__paragraph}>
                    No favourites to show
                </p>
            )}
        </div>
    );
};

export default Favourites;
