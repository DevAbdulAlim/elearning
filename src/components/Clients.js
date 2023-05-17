import {
  Box,
  Card,
  CardMedia,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";

import client1 from "../static/images/clients/1.png";
import client2 from "../static/images/clients/2.png";
import client3 from "../static/images/clients/3.png";
import client4 from "../static/images/clients/4.webp";
import client5 from "../static/images/clients/5.png";
import client6 from "../static/images/clients/6.jpg";
import client7 from "../static/images/clients/7.png";
import client8 from "../static/images/clients/8.png";
import client9 from "../static/images/clients/9.webp";
import client10 from "../static/images/clients/10.png";
import client11 from "../static/images/clients/11.png";
import client12 from "../static/images/clients/12.png";

export const ClientCard = styled(Card)`
  display: flex;
  border-radius: 10px;
  height: 150px;

  padding: 5px;
  box-shadow: rgb(140 152 164 / 25%) 0px 3px 6px 0px;
  :hover {
    transform: translate(0px, -3px);
    transition: all 0.2s ease-in-out 0s;
  }
`;

const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
];

export default function Clients() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "rgb(247, 250, 255)",
          padding: "50px 0",
        }}
      >
        <Container maxWidth="xl">
          <Typography pb="1.5rem" variant="h4" align="center" gutterBottom>
            Our Clients
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
          >
            {clients.map((client) => (
              <Grid item xs={6} sm={4} md={3} lg={2} data-aos="zoom-in">
                <ClientCard>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={client}
                    alt="client"
                  />
                </ClientCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
