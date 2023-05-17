import { Box, Container } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Fragment } from "react";

import certificate from "../../static/images/certificate.png";

export default function Certificate() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const checkCertificate = (e) => {
    e.preventDefault();
    axios
      .get(`/api/v1/student/${id}`)
      .then((response) => setName(response.data.name))
      .catch((error) => console.log(error));
    setName("");
  };

  return (
    <Fragment>
      <Box pt={4}>
        <Container maxWidth="xl">
          <form onSubmit={checkCertificate}>
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Your ID"
            />
            <input type="submit" value="Submit" />
          </form>
          {name ? (
            <div
              style={{
                position: "relative",
                textAlign: "center",
                width: "100%",
              }}
            >
              <img
                src={certificate}
                alt="certificate"
                style={{ width: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "3.5vw",
                  color: "#a48b55",
                }}
              >
                {name}
              </div>
            </div>
          ) : null}
        </Container>
      </Box>
    </Fragment>
  );
}
