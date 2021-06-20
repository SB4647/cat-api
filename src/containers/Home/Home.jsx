import React from "react";
import styles from "./Home.module.scss";
import BreedList from "../../components/BreedList";
import Search from "../../components/Search";

const Home = ({
    breeds,
    displayedBreeds,
    toogleBreedFav,
    setSearchedBreed,
}) => {
    return (
        <div className={styles.contents}>
            <h1 className={styles.contents__heading}>WELCOME!</h1>
            <p className={styles.contents__paragraph}>
                This application uses the{" "}
                <a href="https://docs.thecatapi.com/">Cat API</a> to search for
                information on certain breeds of cats. <br />
                <br />
                To search for a breed information card use the drop down menu
                below. Any searched cards can be added to favourites by clicking
                on the heart icon.
            </p>
            <Search setSearchedBreed={setSearchedBreed} breeds={breeds} />
            <BreedList
                breedsToDisplay={displayedBreeds}
                toogleBreedFav={toogleBreedFav}
            />
        </div>
    );
};

export default Home;
