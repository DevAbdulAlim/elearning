import React, { Fragment } from "react";
import Training from "../../components/Training";
import Services from "../../components/Services";
import Clients from "../../components/Clients";
import Partnership from "../../components/Partnership";
import Facts from "../../components/Facts";
import HeroSection from "../../components/HeroSection";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Facts />
      <Services />
      <Training />
      <Clients />
      <Partnership />
    </Fragment>
  );
}
