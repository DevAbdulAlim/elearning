import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  CardMedia,
  CardActions,
  Divider,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import RelatedCourse from "../../components/RelatedCourse";
import Softwares from "../../components/Softwares";
import Support from "../../components/Support";
import Syllabus from "../../components/Syllabus";
import WhoCanLearn from "../../components/WhoCanLearn";
import { courses } from "../../_mock/data";

export default function CourseDetails() {
  const params = useParams();

  const result = courses.filter((course) => course.xName === params.name);
  console.log(typeof result);

  return (
    <Fragment>
      <Box sx={{ pt: 10 }}>
        <Container maxWidth="xl">
          {result.map((item) => (
            <Grid key={item.id} container>
              <Grid mt="3vh" item xs={12}>
                <Grid container spacing="3vh">
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography
                      sx={{ color: "rgb(48, 48, 68)" }}
                      mb="3vh"
                      variant="h3"
                    >
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
              </Grid>

              <Grid mt="12vh" item xs={12}>
                <Grid container justifyContent="flex-end" spacing="3vh">
                  <Grid item sm={12} md={8}>
                    <Typography
                      sx={{ color: "rgb(48, 48, 68)" }}
                      mb="3vh"
                      variant="h4"
                    >
                      যেসব সফটওয়্যার শেখানো হয়
                    </Typography>
                    <Softwares data={item} />
                    <WhoCanLearn />
                    <Syllabus />
                  </Grid>
                  <Grid item sm={12} md={4}>
                    <Card
                      sx={{
                        p: "2vh",
                        borderRadius: "2vh",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        color: "rgb(48, 48, 68)",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        image="https://static8.depositphotos.com/1062042/972/v/450/depositphotos_9725775-stock-illustration-gold-detailed-certificate.jpg"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Responsive Web Design
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Stack
                          dicrection="row"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                        >
                          <Button variant="outlined" color="success">
                            Enroll Now
                          </Button>
                        </Stack>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ width: "100%" }} />
              <Grid item xs={12}>
                <RelatedCourse />
                <Support />
              </Grid>
            </Grid>
          ))}
        </Container>
      </Box>
    </Fragment>
  );
}
