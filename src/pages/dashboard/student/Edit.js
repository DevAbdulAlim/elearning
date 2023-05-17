import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment } from "react";
import EditStudent from "../../../components/dashboard/EditStudent";

export default function Edit() {
  return (
    <Fragment>
      <Container>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" gutterBottom>
            Edit student
          </Typography>
          <EditStudent />
        </Stack>
      </Container>
    </Fragment>
  );
}
