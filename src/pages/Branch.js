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

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Branch() {
  return (
    <Box pt={8} pb={8} sx={{ backgroundColor: "#ECF2FF" }}>
      <Container maxWidth="xxl">
        <Typography
          variant="h4"
          align="center"
          fontWeight={"bolder"}
          mb={5}
          gutterBottom
          color="#202060"
        >
          সকল শাখা সমূহ
        </Typography>
        <Grid container spacing={8}>
          {[...Array(3)].map((item, index) => {
            let direction = "row";
            if (index % 2 !== 0) {
              direction = "row-reverse";
            }

            return (
              <Grid item xs={12}>
                <Card
                  sx={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;",
                    borderRadius: "1rem",
                  }}
                >
                  <Grid
                    container
                    direction={{
                      xs: "column-reverse",
                      md: `${direction}`,
                    }}
                  >
                    <Grid item xs={12} md={7}>
                      <Stack p={8} elevation="0" spacing={3}>
                        <Typography
                          variant="h5"
                          fontWeight={"bolder"}
                          color="#e7673f"
                        >
                          রাজশাহী শাখা
                        </Typography>
                        <Typography color="text.secondary" gutterBottom>
                          রাজশাহী বাংলাদেশের অন্যতম প্রাচীন ও ঐতিহ্যবাহী
                          মহানগরী। এটি উত্তরবঙ্গের সবচেয়ে বড় শহর। রাজশাহী শহর
                          পদ্মা নদীর তীরে অবস্থিত। এটি রাজশাহী বিভাগের বিভাগীয়
                          শহর। বর্তমানে বাংলাদেশের সবচেয়ে সুন্দর শহর রাজশাহী।
                        </Typography>
                        <Divider />
                        <Typography variant="h6">যোগাযোগ করুন</Typography>
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
                        <Typography
                          sx={{ color: "text.secondary" }}
                          gutterBottom
                        >
                          খাজা সুপার মার্কেট, ২য় থেকে ৭ম তলা, কল্যাণপুর বাস
                          স্টপ, মিরপুর রোড, ঢাকা-১২০৭।
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
                    <Grid item xs={12} md={5}>
                      <Stack
                        justifyContent="center"
                        alignContent="center"
                        p={4}
                        height="100%"
                      >
                        <CardMedia
                          sx={{
                            border: "1rem solid white",
                            borderRadius: "0.5rem",
                            boxShadow:
                              "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
                          }}
                          height="100%"
                          component="img"
                          src="https://i0.wp.com/www.collincollegenews.com/wp-content/uploads/2020/08/RS85_CYC-Dec2010-009-scr.jpg?fit=1024%2C685&ssl=1"
                          alt="traning institute"
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
