import styles from "./BreedCard.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

const BreedCard = ({ name, description, imageURL, isFav, toogleBreedFav }) => {
  const [favState, setFavState] = useState(isFav);

  const heartIcon = favState ? solidHeart : emptyHeart;

  const handleFavClick = (e) => {
    e.stopPropagation();
    toogleBreedFav(name);
    setFavState(!isFav);
  };

  return (
    <section className={styles.contents}>
      <span className={styles.heart} onClick={handleFavClick}>
        {" "}
        <FontAwesomeIcon icon={heartIcon} />
      </span>
      <h2>{name}</h2>
      <p>{description}</p> <img src={imageURL} />
    </section>
  );
};

export default BreedCard;
