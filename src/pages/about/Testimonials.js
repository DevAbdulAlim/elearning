import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import TestimonialCard from "../../components/TestimonialCard";

export default function Testimonials() {
  return (
    <Fragment>
      <Box pt={8} pb={8}>
        <Container maxWidth="xl">
          <Typography align="center" variant="h3" gutterBottom>
            Testimonial
          </Typography>

          <ImageList sx={{ height: 450 }} variant="woven" cols={4} gap={40}>
            {[...Array(4)].map((item) => (
              <ImageListItem>
                <TestimonialCard />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>
    </Fragment>
  );
}
