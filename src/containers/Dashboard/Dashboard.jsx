import React from "react";
import styles from "./Dashboard.module.scss";
import BreedList from "../../components/BreedList";

const Dashboard = ({ displayedBreeds, toogleBreedFav }) => {
    return (
        <div className={styles.contents}>
            <h1>DASHBOARD</h1>
            <BreedList
                breedsToDisplay={displayedBreeds}
                toogleBreedFav={toogleBreedFav}
            />
        </div>
    );
};

export default Dashboard;
