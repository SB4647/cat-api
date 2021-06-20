import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = ({ paths }) => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.nav__heading}>CAT API SEARCH</h1>
            <ul className={styles.nav__items}>
                <div className={styles.nav__links}>
                    {paths.map((path, i) => (
                        <li key={i}>
                            <Link className={styles.nav__link} to={path}>
                                {path === "/" ? "Home" : path.substring(1)}
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
