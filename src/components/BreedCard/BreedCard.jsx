import styles from "./BreedCard.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

const BreedCard = ({ name, description, isFav, toogleBreedFav, imageURL }) => {
    const [favState, setFavState] = useState(isFav);

    const heartIcon = favState ? solidHeart : emptyHeart;

    const handleFavClick = async (e) => {
        e.stopPropagation();
        toogleBreedFav(name);
        setFavState(!isFav);
    };

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
                <img className={styles.card__image} src={imageURL} alt="" />
            </div>
        </section>
    );
};

export default BreedCard;
