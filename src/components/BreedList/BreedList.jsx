import styles from "./BreedList.module.scss";
import BreedCard from "../BreedCard/BreedCard";

import { catAPIRequestInfo } from "../../data/breeds";

const BreedList = ({ breedsToDisplay, toogleBreedFav }) => {
    return (
        <div className={styles.cardList}>
            {breedsToDisplay.map((breed, i) => {
                return (
                    <BreedCard
                        key={i}
                        breedID={breed.id}
                        name={breed.name}
                        description={breed.description}
                        isFav={breed.isFav}
                        URL={breed}
                        toogleBreedFav={toogleBreedFav}
                    />
                );
            })}
        </div>
    );
};

export default BreedList;
