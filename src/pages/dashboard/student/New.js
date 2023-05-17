import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment } from "react";
import NewStudent from "../../../components/dashboard/NewStudent";

export default function New() {
  return (
    <Fragment>
      <Container>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" gutterBottom>
            Register student
          </Typography>
          <NewStudent />
        </Stack>
      </Container>
    </Fragment>
  );
}
