import { Navigate, useParams } from "react-router-dom";
import { createTabArray, findObjectFromName } from "../utils/findObject";
import LinksNavigation from "./LinksNavigation";

import data from "../data/data.json";
import styles from "./CrewSection.module.css";
import { preloadImages } from "../utils/preloadImages";
import { useEffect } from "react";

function CrewSection() {
  const { crewMember } = useParams();

  const getMember = findObjectFromName(data.crew, crewMember);

  useEffect(function () {
    preloadImages(data.crew.map(({ images }) => images.webp));
  }, []);

  if (!getMember) return <Navigate to="/404" replace />;

  const { name, images, role, bio } = getMember;

  return (
    <div className={styles.container}>
      <div className={styles["content-wrapper"]}>
        <LinksNavigation
          ariaLabel="Crew navigation"
          id="crew-navigation"
          tabs={createTabArray(data.crew)}
          navTo="/crew"
          variant="dots"
          className={styles.nav}
        />

        <section
          aria-labelledby="crew-member-heading"
          className={styles["info-section"]}
        >
          <span>{role}</span>
          <h2 id="crew-member-heading">{name}</h2>
          <p>{bio}</p>
        </section>
      </div>

      <div className={styles["image-wrapper"]}>
        <img src={images.webp} alt={name} width={271} height={340} />
      </div>
    </div>
  );
}

export default CrewSection;
