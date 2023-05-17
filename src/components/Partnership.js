import { Card, Box, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";
import Clients, { ClientCard } from "./Clients";

import partner1 from "../static/images/partners/1.png";
import partner2 from "../static/images/partners/2.jpg";
import partner3 from "../static/images/partners/3.jpg";
import partner4 from "../static/images/partners/4.jpg";
import partner5 from "../static/images/partners/5.png";
import partner6 from "../static/images/partners/6.png";
import partner7 from "../static/images/partners/7.jpg";
import partner8 from "../static/images/partners/8.png";
import partner9 from "../static/images/partners/9.jpg";
import partner10 from "../static/images/partners/10.png";
import partner11 from "../static/images/partners/11.png";
import partner12 from "../static/images/partners/12.webp";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
];

export default function Partnership() {
  return (
    <Box pt={4} pb={4}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" gutterBottom>
          Our Partnership
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={4}
        >
          {partners.map((partner) => (
            <Grid item xs={6} sm={4} md={3} lg={2} data-aos="zoom-in">
              <ClientCard>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={partner}
                  alt="partner"
                />
              </ClientCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
