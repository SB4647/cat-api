import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setSearchedBreed, breeds }) => {
    const selectHandle = (event) => {
        setSearchedBreed(event.target.value);
    };

    return (
        <div className={styles.search}>
            <span className={styles.fa}>
                <FontAwesomeIcon icon={faSearch} />
            </span>
            <select onChange={selectHandle}>
                <option key="default" selected="selected" disabled hidden>
                    Choose a cat breed..
                </option>
                <option key="select-all" value="select-all">
                    Search all breeds
                </option>
                {breeds.map((breed, i) => (
                    <option key={i} value={breed.name}>
                        {breed.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Search;
