import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Navigation = ({ setSearchedBreed, paths }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {paths.map((path, i) => (
          <li key={i}>
            <Link className={styles.nav__link} to={path}>
              {path.substring(1)}
            </Link>
          </li>
        ))}
      </ul>
      <Search setSearchedBreed={setSearchedBreed} />
    </nav>
  );
};

export default Navigation;
