import React, { Fragment } from "react";
import ContactMap from "../../components/ContactMap";
import Registration from "../../components/registration/Registration";

export default function Contact() {
  return (
    <Fragment>
      <ContactMap />
      <Registration />
    </Fragment>
  );
}
