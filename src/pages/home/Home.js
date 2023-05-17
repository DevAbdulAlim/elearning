import React, { Fragment } from "react";
import SwipeableTextMobileStepper from "../../components/Crasual";
import Training from "../../components/Training";
import Services from "../../components/Services";
import Clients from "../../components/Clients";
import Partnership from "../../components/Partnership";
import Facts from "../../components/Facts";

export default function Home() {
  return (
    <Fragment>
      <SwipeableTextMobileStepper />
      <Facts />
      <Services />
      <Training />
      <Clients />
      <Partnership />
    </Fragment>
  );
}
