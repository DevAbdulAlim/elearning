import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export default function Gallery() {
  return (
    <Box pt={8} pb={8}>
      <Container maxWidth="xxl">
        <Typography pb={2} align="center" variant="h3" gutterBottom>
          Photo Gallery
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 4, lg: 6 }}>
          {[...Array(12)].map((item) => (
            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: "#2B3467" }}>
                <Link
                  color="white"
                  underline="none"
                  component={RouterLink}
                  to="gallery/iran"
                >
                  <CardMedia
                    component="img"
                    src={require("../../static/images/gallery/masud-alam-md1.jpg")}
                    alt="image"
                  />
                  <CardContent>
                    <Typography>Name of the Category</Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
