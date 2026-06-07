import { Navigate, useParams } from "react-router-dom";
import LinksNavigation from "./LinksNavigation";

import data from "../data/data.json";
import styles from "./DestinationSection.module.css";
import { createTabArray, findObjectFromName } from "../utils/findObject";
import { useEffect } from "react";
import { preloadImages } from "../utils/preloadImages";

function DestinationSection() {
  const { planet } = useParams();

  const getPlanet = findObjectFromName(data.destinations, planet);

  useEffect(function () {
    preloadImages(data.destinations.map(({ images }) => images.webp));
  }, []);

  if (!getPlanet) return <Navigate to="/404" replace />;

  const { name, images, description, distance, travel } = getPlanet;

  return (
    <div className={styles["section-wrapper"]}>
      <img src={images.webp} alt={`${name} planet`} width={150} height={150} />

      <div>
        <LinksNavigation
          ariaLabel="Destination navigation"
          id="destination-navigation"
          navTo="/destination"
          tabs={createTabArray(data.destinations)}
          className={styles["nav-destination"]}
        />

        <section
          aria-labelledby="planet-heading"
          className={styles["info-section"]}
        >
          <h2 id="planet-heading">{name}</h2>
          <p>{description}</p>
          <hr />
          <dl className={styles["description-list"]}>
            <div>
              <dt>AVG. Distance</dt>
              <dd>{distance}</dd>
            </div>

            <div>
              <dt>EST. Travel Time</dt>
              <dd>{travel}</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}

export default DestinationSection;
