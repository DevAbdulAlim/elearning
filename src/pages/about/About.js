import React, { Fragment } from "react";

import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import TeamManagement from "./TeamManagement";

export default function About() {
  return (
    <Fragment>
      <AboutUs />

      <Gallery />
      <TeamManagement />
      <Testimonials />
    </Fragment>
  );
}
