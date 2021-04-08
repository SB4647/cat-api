import styles from "./Search.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setSearchedBreed, breedsData }) => {
  const [isOpen, setIsOpen] = useState(true);

  const selectHandle = (event) => {
    setSearchedBreed(event.target.value);
  };

  const input = isOpen ? (
    <select onChange={selectHandle}>
      <option key="default" selected="selected" disabled hidden>
        Choose a cat breed..
      </option>
      <option key="select-all" value="select-all">
        Serach all breeds
      </option>
      {breedsData.map((breed, i) => (
        <option key={i} value={breed.name}>
          {breed.name}
        </option>
      ))}
    </select>
  ) : null;

  return (
    <div className={styles.search}>
      {input}
      <span className={styles.fa} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
};

export default Search;
