import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment } from "react";

export default function Dashboard() {
  return (
    <Fragment>
      <Container>
        <Typography variant="h4" align="center">
          Welcome to Dashboard
        </Typography>
      </Container>
    </Fragment>
  );
}
