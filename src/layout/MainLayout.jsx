import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import styles from "./MainLayout.module.css";
import { preloadImages } from "../utils/preloadImages";
import PageNotFound from "../pages/PageNotFound";

function MainLayout() {
  const { pathname } = useLocation();
  let bgImage = "bg-home";

  if (pathname.startsWith("/dest")) bgImage = "bg-dest";
  if (pathname.startsWith("/crew")) bgImage = "bg-crew";
  if (pathname.startsWith("/tech")) bgImage = "bg-tech";

  useEffect(function () {
    preloadImages([
      "/assets/home/background-home-desktop.jpg",
      "/assets/destination/background-destination-desktop.jpg",
      "/assets/crew/background-crew-desktop.jpg",
      "/assets/technology/background-technology-desktop.jpg",
      "/assets/home/background-home-tablet.jpg",
      "/assets/destination/background-destination-tablet.jpg",
      "/assets/crew/background-crew-tablet.jpg",
      "/assets/technology/background-technology-tablet.jpg",
      "/assets/home/background-home-mobile.jpg",
      "/assets/destination/background-destination-mobile.jpg",
      "/assets/crew/background-crew-mobile.jpg",
      "/assets/technology/background-technology-mobile.jpg",
    ]);
  }, []);

  if (pathname === `/404`) return <PageNotFound />;

  return (
    <div className={`${styles[bgImage]} ${styles["min-h-screen"]}`}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
