import styles from "./BreedList.module.scss";
import BreedCard from "../BreedCard/BreedCard";

const BreedList = ({ breedsToDisplay, toogleBreedFav }) => {
    return (
        <div className={styles.cardList}>
            {breedsToDisplay.map((breed, i) => {
                return (
                    <BreedCard
                        key={i}
                        name={breed.name}
                        description={breed.description}
                        isFav={breed.isFav}
                        imageURL={breed.url}
                        toogleBreedFav={toogleBreedFav}
                    />
                );
            })}
        </div>
    );
};

export default BreedList;
