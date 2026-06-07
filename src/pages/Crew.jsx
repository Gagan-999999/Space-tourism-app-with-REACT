import { Outlet } from "react-router-dom";
import Section from "../components/Section";

function Crew() {
  return (
    <Section
      label="crew-heading"
      content={
        <>
          <span aria-hidden="true">02</span> Meet Your Crew
        </>
      }
    >
      <Outlet />
    </Section>
  );
}

export default Crew;
