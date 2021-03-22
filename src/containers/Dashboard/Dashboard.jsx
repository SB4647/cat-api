import React from "react";
import styles from "./Dashboard.module.scss";
import BreedList from "../../components/BreedList";

const Dashboard = ({ displayedBreeds, toogleBreedFav }) => {
  //const { image, title, author, published } = props;

  return (
    <div className={styles.contents}>
      <BreedList
        breedsToDisplay={displayedBreeds}
        toogleBreedFav={toogleBreedFav}
      />
    </div>
  );
};

export default Dashboard;
