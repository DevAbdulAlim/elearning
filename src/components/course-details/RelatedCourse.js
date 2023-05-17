import React, { Fragment, useEffect } from "react";
import { courses } from "../../_mock/data";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Box,
  Grid,
  styled,
  Typography,
  Divider,
  Rating,
  Link,
} from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import cardImage from "../../static/images/cardImage.jpg";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const CustomCard = styled(Card)`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1vh;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;

const firstThree = courses.slice(0, 3);

export default function RelatedCourse() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Fragment>
      <Box mt="12vh" mb="6vh">
        <Container maxWidth="xxl">
          <Typography
            mb="3vh"
            sx={{ color: "rgb(48, 48, 68)" }}
            variant="h4"
            align="center"
          >
            সংশ্লিষ্ট কোর্স
          </Typography>
          <Grid
            container
            spacing={{ xs: 4, sm: 4, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {firstThree.map((course, id) => (
              <Grid
                item
                sx={{ maxWidth: 345 }}
                xs={4}
                sm={4}
                md={4}
                key={id}
                data-aos="fade-up"
              >
                <CustomCard className="card">
                  <CardMedia
                    component="img"
                    height="250"
                    image={cardImage}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">{course.name}</Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      ১৫,০০০ রিভিউস
                    </Typography>
                    <br />
                    <div>
                      <Typography variant="h5">60,000 &#2547;</Typography>
                      <Link
                        component={RouterLink}
                        underline="none"
                        to={
                          "/course-cat/" + course.xCategory + "/" + course.xName
                        }
                      >
                        <Button variant="contained">
                          বিস্তারিত দেখুন
                          <ReadMoreIcon />
                        </Button>
                      </Link>
                    </div>
                    <Typography></Typography>
                  </CardContent>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
