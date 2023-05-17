import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, Container, Stack, Typography } from "@mui/material";
import StudentList from "../../../components/dashboard/StudentList";

import { HiPlus } from "react-icons/hi";

export default function Student() {
  return (
    <Fragment>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">Student List</Typography>
          <Link
            underline="none"
            color="inherit"
            component={RouterLink}
            to="new"
          >
            <Button variant="contained">
              <HiPlus />
              Register
            </Button>
          </Link>
        </Stack>
        <br />

        <StudentList />
      </Container>
    </Fragment>
  );
}
