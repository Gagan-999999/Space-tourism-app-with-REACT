import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section aria-labelledby="hero-heading" className={styles.section}>
      <div className={styles.content}>
        <h1 id="hero-heading">
          So, you want to travel to <span>Space</span>
        </h1>
        <p>
          Let’s face it: if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.exploreWrapper}>
        <Link to="/destination" className={styles.explore}>
          Explore <span className="sr-only">Destinations</span>
        </Link>
      </div>
    </section>
  );
}

export default Home;
