import { Outlet } from "react-router-dom";
import Section from "../components/Section";

function Destination() {
  return (
    <Section
      label="destination-heading"
      content={
        <>
          <span aria-hidden="true">01</span> Pick your destination
        </>
      }
    >
      <Outlet />
    </Section>
  );
}

export default Destination;
