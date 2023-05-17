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
import CourseAbout from "../../components/course-details/CourseAbout";
import RelatedCourse from "../../components/course-details/RelatedCourse";
import Softwares from "../../components/Softwares";
import Support from "../../components/course-details/Support";
import Syllabus from "../../components/Syllabus";
import WhoCanLearn from "../../components/WhoCanLearn";
import { courses } from "../../_mock/data";

export default function CourseDetails() {
  const params = useParams();

  const result = courses.filter((course) => course.xName === params.name);
  console.log(typeof result);

  return (
    <Fragment>
      {result.map((item) => {
        return (
          <>
            <CourseAbout data={item} />
            <Box>
              <Container maxWidth="xxl">
                <Grid
                  container
                  justifyContent="flex-end"
                  spacing={{ xs: 2, md: 4, lg: 6 }}
                >
                  <Grid item sm={12} md={8}>
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
              </Container>
            </Box>

            <Container>
              <Divider sx={{ width: "100%" }} />
            </Container>

            <Grid item xs={12}>
              <Support />
              <RelatedCourse />
            </Grid>
          </>
        );
      })}
    </Fragment>
  );
}
