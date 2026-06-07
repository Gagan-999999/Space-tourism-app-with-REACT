import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <main className={styles["page-not-found"]}>
      <h1>404</h1>
      <p>
        The page you requested could not be found. It may have been moved or is
        no longer available.
      </p>

      <Link to="/" className={styles["home-link"]}>
        Go Home
      </Link>
    </main>
  );
}
