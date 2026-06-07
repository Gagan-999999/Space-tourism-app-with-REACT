import { NavLink } from "react-router-dom";

function LinksNavigation({
  ariaLabel,
  id,
  tabs,
  navTo = "",
  variant = "text",
  className,
  onNavigate = undefined,
}) {
  return (
    <nav aria-label={ariaLabel} id={id} className={className}>
      <ul>
        {tabs.map(({ label, path }, i) => {
          return (
            <li key={label} onClick={onNavigate}>
              <NavLink to={`${navTo}/${path}`}>
                {getContent(variant, label, i)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function getContent(variant, label, index) {
  switch (variant) {
    case "text":
      return label;

    case "numbered-text":
      return (
        <>
          <span aria-hidden={true}>{String(index).padStart(2, "0")}</span>{" "}
          {label}
        </>
      );

    case "dots":
      return <span className="sr-only">{label}</span>;

    case "numbered":
      return (
        <>
          {index + 1}
          <span className="sr-only">{label}</span>
        </>
      );

    default:
      return label;
  }
}

export default LinksNavigation;
