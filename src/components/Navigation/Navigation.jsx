import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Navigation = ({ setSearchedBreed, paths, breedsData }) => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.nav__heading}>CAT API SEARCH</h1>
            <ul className={styles.nav__items}>
                <div className={styles.nav__links}>
                    <div className={styles.nav__search}>
                        <Search
                            setSearchedBreed={setSearchedBreed}
                            breedsData={breedsData}
                        />
                    </div>
                    {paths.map((path, i) => (
                        <li key={i}>
                            <Link className={styles.nav__link} to={path}>
                                {path.substring(1)}
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
