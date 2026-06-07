import styles from "./Section.module.css";

function Section({ label, content, children }) {
  return (
    <section aria-labelledby={label} className={styles.section}>
      <h1 id={label}>{content}</h1>
      {children}
    </section>
  );
}

export default Section;
