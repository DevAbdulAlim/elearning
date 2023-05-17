import React, { Fragment } from "react";
import { AppBar, CssBaseline, Typography, Container } from "@mui/material";

export default function Menu2() {
  return (
    <Fragment>
      <CssBaseline>
        <AppBar>
          <Container maxWidht="lg">
            <Typography>Home</Typography>
          </Container>
        </AppBar>
      </CssBaseline>
    </Fragment>
  );
}
