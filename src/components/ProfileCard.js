import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { border } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ProfileCard() {
  return (
    <Grid container spacing={4}>
      {[...Array(8)].map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              transition: "all 2s",
              "&:hover": {
                backgroundColor: "#ebeafa",
              },

              borderRadius: "1rem",
              position: "relative",
              height: "320px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;",
            }}
            data-aos="zoom-in"
          >
            <Box
              component="div"
              sx={{ mt: "1rem", display: "flex", justifyContent: "center" }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "50%",
                  border: "4px solid #f0f0f9",
                }}
                image={require("../static/images/teams/masud-alom.jpeg")}
                title="green iguana"
              />
            </Box>

            <CardContent>
              <Typography align="center" variant="h5" component="div">
                Masud Alom
              </Typography>
              <Typography
                align="center"
                fontStyle="italic"
                color="#ff9800"
                component="p"
                gutterBottom
              >
                Managing Director
              </Typography>
              <Typography
                sx={{ overflow: "hidden", height: "40px" }}
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species...
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <item>
                  <FacebookIcon sx={{ color: "#3b5998" }} />
                </item>
                <item>
                  <LinkedInIcon sx={{ color: "#0072b1" }} />
                </item>

                <item>
                  <TwitterIcon sx={{ color: "#00acee" }} />
                </item>
              </Stack>
            </CardContent>

            <CardActions
              sx={{
                position: "absolute",
                top: "97%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Button size="small" variant="contained">
                Profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
