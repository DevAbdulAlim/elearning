import React, { Fragment, useEffect } from "react";

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
  Stack,
} from "@mui/material";

// AOS

import { MdClass, MdTimer, MdAccountCircle } from "react-icons/md";
import { RiAccountCircleFill, RiTimerFill } from "react-icons/ri";

const CustomCard = styled(Card)`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
`;

export default function CourseCard(props) {
  return (
    <Fragment>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <CustomCard className="card">
          <CardMedia component="img" height="195" src="" alt="green iguana" />
          <Stack p="1rem 1rem" spacing={1.5}>
            <Typography
              sx={{ fontWeight: "bolder", color: "#5e5d76" }}
              variant="h5"
              gutterBottom
            >
              {props.course.name}
            </Typography>

            <Stack
              color="text.secondary"
              p="0.5rem"
              direction="row"
              alignItems="center"
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                backgroundColor: "#fbfaff",
                borderRadius: "10px",
              }}
            >
              <RiTimerFill
                style={{
                  fontSize: "2rem",
                  padding: "5px",
                  borderRadius: "50%",
                  background: "radial-gradient(rgb(0 1 255), transparent)",
                  color: "white",
                  marginRight: "1rem",
                }}
              />
              <Typography pr={1} sx={{ fontSize: "16px" }}>
                সময়কাল
              </Typography>
              <Typography component="span">২ ঘণ্টা</Typography>
            </Stack>

            <Stack
              color="text.secondary"
              p="0.5rem"
              direction="row"
              alignItems="center"
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                backgroundColor: "#fbfaff",
                borderRadius: "10px",
              }}
            >
              <MdClass
                style={{
                  fontSize: "2rem",
                  padding: "5px",
                  borderRadius: "50%",
                  background: "radial-gradient(rgb(255 89 0), transparent)",
                  color: "white",
                  marginRight: "1rem",
                }}
              />
              <Typography pr={1} sx={{ fontSize: "16px", color: "#5e5d76" }}>
                মোট ক্লাস
              </Typography>
              <Typography component="span">৩৬ টি</Typography>
            </Stack>

            <Stack
              pt="2rem"
              pb="0.01rem"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#5e5d76",
                }}
              >
                কোর্স ফি{" "}
                <Typography sx={{ fontSize: "22px" }} component="span">
                  ৩০,০০০ &#2547;
                </Typography>
              </Typography>
              <Link
                component={RouterLink}
                underline="none"
                to={
                  "/course-cat/" +
                  props.course.xCategory +
                  "/" +
                  props.course.xName
                }
              >
                <Button
                  sx={{
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#1a9311",
                      boxShadow: "none",
                    },
                    backgroundColor: " #5f5ba5",
                  }}
                  variant="contained"
                >
                  বিস্তারিত
                </Button>
              </Link>
            </Stack>
          </Stack>
        </CustomCard>
      </Grid>
    </Fragment>
  );
}
