import { Outlet } from "react-router-dom";
import Section from "../components/Section";

function TechnologyPage() {
  return (
    <Section
      label="technology-heading"
      content={
        <>
          <span aria-hidden="true">03</span> Space Launch 101
        </>
      }
    >
      <Outlet />
    </Section>
  );
}

export default TechnologyPage;
