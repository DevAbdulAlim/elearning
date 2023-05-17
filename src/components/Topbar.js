import { Fragment } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import { MdCall } from "react-icons/md";

import { MdCallEnd } from "react-icons/md";

import { MdEmail } from "react-icons/md";

export default function Topbar() {
  return (
    <Fragment>
      <Box
        sx={{ backgroundColor: "#202060", color: "white" }}
        pt="1vh"
        pb="1vh"
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            flexWrap="wrap"
            spacing="2vh"
          >
            <Typography fontSize="1.3rem">
              <MdCallEnd style={{ marginRight: "1vh", fontSize: "1.3rem" }} />
              +৮৮ ০২-৮০৯১১৮৮
            </Typography>
            <Typography fontSize="1.3rem">
              <MdCall style={{ marginRight: "1vh", fontSize: "1.3rem" }} />{" "}
              ০১৫৫০-৬৬৬৮০০{" "}
            </Typography>
            <Typography fontSize="1.3rem">
              <MdCall style={{ marginRight: "1vh", fontSize: "1.3rem" }} />{" "}
              ০১৫৫০-৬৬৬৯০০{" "}
            </Typography>
            <Typography fontSize="1.3rem">
              <MdEmail style={{ marginRight: "1vh", fontSize: "1.3rem" }} />{" "}
              info@e-laeltd.com
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
}
