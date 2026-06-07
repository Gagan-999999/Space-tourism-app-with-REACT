import { useState } from "react";
import LinksNavigation from "./LinksNavigation";

import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((c) => !c);
  }

  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="" width={40} height={40} />

      <button
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={handleToggle}
        className={styles.navBtn}
      >
        <span className="sr-only">{`${isOpen ? "Close" : "Open"} main navigation`}</span>
        <img
          src={`/assets/shared/icon-${isOpen ? "close" : "hamburger"}.svg`}
          alt=""
          width={24}
          height={22}
        />
      </button>

      <LinksNavigation
        onNavigate={() => setIsOpen(false)}
        className={`${isOpen ? "" : styles["close-nav"]} ${styles.nav}`}
        ariaLabel="Primary navigation"
        id="primary-navigation"
        tabs={[
          { label: "Home", path: "" },
          { label: "Destination", path: "destination" },
          { label: "Crew", path: "crew" },
          { label: "Technology", path: "technology" },
        ]}
        variant="numbered-text"
      />
    </header>
  );
}

export default Header;
