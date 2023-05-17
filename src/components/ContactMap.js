import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Fragment } from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function ContactMap() {
  return (
    <Fragment>
      <Box p="4rem 0">
        <Container maxWidth="xxl">
          <Card
            sx={{
              padding: { xs: "2rem", lg: "4rem", xl: "6rem" },
              backgroundColor: "#e6f4ff91",
              boxShadow: "none",
            }}
          >
            <Grid
              container
              spacing={4}
              direction={{ xs: "column-reverse", md: "row" }}
            >
              <Grid item md={12} lg={6}>
                <Stack direction="column" spacing={3}>
                  <Typography
                    variant="h5"
                    fontWeight={"bolder"}
                    color="#202060"
                  >
                    যোগাযোগ করুন
                  </Typography>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "2rem" }}>
                      <MailOutlineIcon
                        sx={{
                          fontSize: "2rem",
                          marginRight: "1rem",
                          color: "#6E85B7",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="ই-মেইল" />
                  </ListItem>
                  <Typography sx={{ color: "text.secondary" }}>
                    info@e-laeltd.com
                  </Typography>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "2rem" }}>
                      <PhoneIphoneIcon
                        sx={{
                          fontSize: "2rem",
                          marginRight: "1rem",
                          color: "#6E85B7",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="ফোন" />
                  </ListItem>
                  <Typography sx={{ color: "text.secondary" }}>
                    +৮৮ ০১৫৫০-৬৬৬৯০০
                  </Typography>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "2rem" }}>
                      <LocationOnIcon
                        sx={{
                          fontSize: "2rem",
                          marginRight: "1rem",
                          color: "#6E85B7",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="ঠিকানা" />
                  </ListItem>
                  <Typography sx={{ color: "text.secondary" }} gutterBottom>
                    খাজা সুপার মার্কেট, ২য় থেকে ৭ম তলা, কল্যাণপুর বাস স্টপ,
                    মিরপুর রোড, ঢাকা-১২০৭।
                  </Typography>
                  <Divider />
                  <Typography variant="h6">অনুসরণ করুন</Typography>
                  <Stack
                    sx={{ color: "text.secondary" }}
                    direction="row"
                    spacing={2}
                  >
                    <FacebookIcon
                      sx={{
                        fontSize: "2rem",
                        color: "#3b5998",
                        transition: "all 0.3s",
                        "&:hover": { scale: "1.3", cursor: "pointer" },
                      }}
                    />
                    <TwitterIcon
                      sx={{
                        fontSize: "2rem",
                        color: "#00acee",
                        transition: "all 0.3s",
                        "&:hover": { scale: "1.3", cursor: "pointer" },
                      }}
                    />
                    <LinkedInIcon
                      sx={{
                        fontSize: "2rem",
                        color: "#0072b1",
                        transition: "all 0.3s",
                        "&:hover": { scale: "1.3", cursor: "pointer" },
                      }}
                    />
                    <YouTubeIcon
                      sx={{
                        fontSize: "2rem",
                        color: "#FF0000",
                        transition: "all 0.3s",
                        "&:hover": { scale: "1.3", cursor: "pointer" },
                      }}
                    />
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card p={{ xs: "2rem", md: "3rem" }} sx={{ height: "100%" }}>
                  <CardMedia
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.7872843573017!2d90.36053342923344!3d23.77770302630334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1bed6904d3b%3A0x7556d0da72660580!2se-Learning%20%26%20Earning%20Ltd.!5e0!3m2!1sbn!2sbd!4v1662624884489!5m2!1sbn!2sbd"
                    width="100%"
                    height="100%"
                    title="e-Learning & Earning Ltd."
                    style={{ border: "1rem solid white" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </Fragment>
  );
}
