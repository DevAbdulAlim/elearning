import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React, { Fragment } from "react";
import CourseCard from "./CourseCard";

export default function Training() {
  return (
    <Fragment>
      <Box sx={{ backgroundColor: "aliceblue" }} pt={8} pb={8}>
        <Container maxWidth="xl">
          <Typography
            sx={{ color: "#5e5d76", fontWeight: "bolder" }}
            pb="2rem"
            variant="h4"
            align="center"
            gutterBottom
          >
            জনপ্রিয় কোর্সসমূহ
          </Typography>

          <CourseCard />
          <Stack
            mt="3rem"
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Button variant="outlined">সবগুলি দেখুন &gt;&gt;</Button>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
}
