import styles from "./BreedList.module.scss";
import BreedCard from "../BreedCard/BreedCard";

import { catAPIRequestInfo } from "../../data/breeds";

const BreedList = ({ breedsToDisplay, toogleBreedFav }) => {
  //   const getBreedImageURL = async (breedName) => {
  //     const response = await fetch(
  //       catAPIRequestInfo.url + breedName,
  //       catAPIRequestInfo.extraInfo
  //     );
  //     const data = await response.json();
  //     const url = await data[0].url;
  //     console.log("data is " + data);
  //     return data;
  //   };

  return (
    <div className={styles.cardList}>
      {breedsToDisplay.map((breed, i) => (
        <BreedCard
          key={i}
          className={styles.cardList__card}
          name={breed.name}
          description={breed.description}
          //imageURL={imageURL}
          isFav={breed.isFav}
          toogleBreedFav={toogleBreedFav}
        />
      ))}
    </div>
  );
};

export default BreedList;
