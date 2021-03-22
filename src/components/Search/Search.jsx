import styles from "./Search.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { breedsArr } from "../../data/breeds";

const Search = ({ setSearchedBreed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectHandle = (event) => {
    setSearchedBreed(event.target.value);
  };

  const input = isOpen ? (
    <select onChange={selectHandle}>
      <option key="default" value="">
        Select all
      </option>
      {breedsArr.map((breed, i) => (
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
      <span>Search for a Cat Breed</span>
    </div>
  );
};

export default Search;
