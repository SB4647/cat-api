import styles from "./BreedCard.module.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

const BreedCard = ({
    name,
    description,
    breedID,
    isFav,
    toogleBreedFav,
    URL,
}) => {
    const [favState, setFavState] = useState(isFav);
    const [imageURL, setimageURL] = useState("");

    const heartIcon = favState ? solidHeart : emptyHeart;

    const handleFavClick = async (e) => {
        e.stopPropagation();
        toogleBreedFav(name);
        setFavState(!isFav);
    };

    // const setBreedImageURL = async (breedID) => {
    //     const response = await fetch(
    //         `https://api.thecatapi.com/v1/images/search?breed_ids=${breedID}`,
    //         {
    //             method: "GET",
    //             headers: {
    //                 "x-api-key": "8e9abc3a-02a2-4700-81a4-58b4998c763b",
    //             },
    //         }
    //     );
    //     console.log(response);
    //     const data = await response.json();

    //     setimageURL(data[0].url);
    // };

    // useEffect(() => {
    //     setBreedImageURL(breedID);
    // }, [breedID]);

    return (
        <section className={styles.card}>
            <div className={styles.card__text}>
                <span className={styles.card__heart} onClick={handleFavClick}>
                    <FontAwesomeIcon icon={heartIcon} />
                </span>
                <h2 className={styles.card__heading}>{name}</h2>
                <p className={styles.card__para}>{description}</p>
            </div>
            <div className={styles.card__imageWrapper}>
                <img className={styles.card__image} src={imageURL} />
            </div>
        </section>
    );
};

export default BreedCard;
