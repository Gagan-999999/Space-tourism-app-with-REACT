import { Navigate, useParams } from "react-router-dom";
import { createTabArray, findObjectFromName } from "../utils/findObject";
import LinksNavigation from "./LinksNavigation";

import data from "../data/data.json";
import styles from "./TechnologySection.module.css";
import { preloadImages } from "../utils/preloadImages";
import { useEffect } from "react";

function TechnologySection() {
  const { tech } = useParams();

  const getEvent = findObjectFromName(data.technology, tech);

  useEffect(function () {
    preloadImages(
      data.technology.flatMap(({ images }) => [
        images.portrait,
        images.landscape,
      ]),
    );
  }, []);

  if (!getEvent) return <Navigate to="/404" replace />;

  const { name, images, description } = getEvent;

  return (
    <div className={styles.container}>
      <div
        role="img"
        aria-label={name}
        className={styles["image-container"]}
        style={{
          "--portrait": `url(${images.portrait})`,
          "--landscape": `url(${images.landscape})`,
        }}
      ></div>

      <div className={styles["content-wrapper"]}>
        <LinksNavigation
          ariaLabel="Technology navigation"
          id="technology-navigation"
          navTo="/technology"
          tabs={createTabArray(data.technology)}
          variant="numbered"
          className={styles.nav}
        />

        <section
          aria-labelledby="terminology-name"
          className={styles["info-section"]}
        >
          <span>The terminology...</span>
          <h2 id="terminology-name">{name}</h2>
          <p>{description}</p>
        </section>
      </div>
    </div>
  );
}

export default TechnologySection;
