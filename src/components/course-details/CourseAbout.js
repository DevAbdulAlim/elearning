import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function CourseAbout(props) {
  const item = props.data;

  console.log(item);
  return (
    <Box pt={8} pb={8}>
      <Container maxWidth="xxl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography sx={{ color: "rgb(48, 48, 68)" }} mb="3vh" variant="h3">
              {item.name}
            </Typography>
            <Typography sx={{ color: "rgb(48, 48, 68)" }} mb="3vh">
              {item.shortDescription}
            </Typography>

            {/* Counter start */}
            <Stack
              alignItems="stretch"
              justifyContent="center"
              direction="row"
              spacing="2vh"
            >
              <Card
                sx={{
                  color: "rgb(48, 48, 68)",
                  width: 150,
                  borderRadius: "15%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <CardContent>
                  <Typography align="center">কোর্সের মেয়াদ </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                    align="center"
                  >
                    {item.duration}{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  color: "rgb(48, 48, 68)",
                  width: 150,
                  borderRadius: "15%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <CardContent>
                  <Typography align="center">লেকচার</Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                    align="center"
                  >
                    {item.lecture}{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  color: "rgb(48, 48, 68)",
                  width: 150,
                  borderRadius: "15%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <CardContent>
                  <Typography align="center">প্রজেক্ট</Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                    align="center"
                  >
                    {item.projects}
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
            {/* Counter end */}
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CardMedia>
              <iframe
                height="350px"
                width="100%"
                src="https://www.youtube.com/embed/tFQk0U9WZxk"
                title="২০২২ উপলক্ষ্যে বাংলাদেশে এই প্রথম সকল  IT কোর্স করুন মাত্র ২০২২ টাকায় | IT Course Cost In Bangladesh"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </CardMedia>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CourseAbout;
