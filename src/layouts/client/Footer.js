import React, { Fragment } from "react";
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Link,
  ListItem,
  List,
  Grid,
} from "@mui/material";
import { StarIcon } from "@heroicons/react/outline";

const usefulLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Admission", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Site Map", href: "#" },
];

const ourCourses = [
  { name: "Basic Courses", href: "#" },
  { name: "Software Development", href: "#" },
  { name: "Hardware", href: "#" },
  { name: "Database Admistration", href: "#" },
  { name: "Server & Network Adminstration", href: "#" },
];

export default function Footer() {
  return (
    <Fragment>
      <CssBaseline>
        <Box
          className="footer"
          sx={{ backgroundColor: "#202060", color: "white", pt: 2 }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              maxWidth="xl"
              spacing={4}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Grid item xs={12} md={6} lg={3}>
                <Typography variant="h6" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="p">
                  E-Learning and Earning Ltd. has been the foremost information
                  technology service provider since 2016. The training programs
                  of e-Learning and Earning Ltd. a wide range of skills that are
                  integral and necessary parts of everyday business. In our
                  quest to address every organizational development need, we
                  offer a gamut of training programs, which ranges from
                  Executive Coaching and Leadership Training to basic
                  Communication Skills.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <List sx={{ "& ul": { padding: 0 } }}>
                  <Typography variant="h6" gutterBottom>
                    Useful Links
                  </Typography>
                  {usefulLinks.map((item) => (
                    <ListItem key={item.name} disableGutters>
                      <Link color="white" href={item.href} underline="hover">
                        {item.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <List>
                  <Typography variant="h6" gutterBottom>
                    Our Services
                  </Typography>
                  <ListItem disableGutters>
                    <Link color="white" href="" underline="hover">
                      Smart Surveillance Solution
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link color="white" href="" underline="hover">
                      It Training Services
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link color="white" href="" underline="hover">
                      Cyber Security Solutions
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link color="white" href="" underline="hover">
                      Cloud Computing Infrastructure
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link color="white" href="" underline="hover">
                      IT Infrastructure Solutions
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link color="white" href="" underline="hover">
                      Cloud-Based ERP Solution
                    </Link>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <List>
                  <Typography variant="h6" gutterBottom>
                    Contact Us
                  </Typography>
                  <ListItem disableGutters>
                    Hotline :01550666800, 01550666900 Email : info@e-laeltd.com
                  </ListItem>
                  <Typography variant="h6" gutterBottom>
                    Head Office:
                  </Typography>
                  <ListItem disableGutters>
                    House # 1029,Road #09 | Avenue # 9A, Mirpur DOHS,Mirpur-12,
                    Dhaka-1216
                  </ListItem>
                  <Typography variant="h6" gutterBottom>
                    Corporate Office:
                  </Typography>
                  <ListItem disableGutters>
                    Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus Stop,
                    Mirpur Road, Dhaka-1207.
                  </ListItem>
                  <Typography variant="h6" gutterBottom>
                    UK Office:
                  </Typography>
                  <ListItem disableGutters>
                    3 PITSEA STREET E1 0JH London
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </CssBaseline>
    </Fragment>
  );
}
