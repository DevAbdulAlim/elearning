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

export default function TestimonialCard() {
  return (
    <Card
      sx={{
        transition: "all 2s",
        "&:hover": {
          backgroundColor: "#ebeafa",
        },

        borderRadius: "1rem",
        position: "relative",

        boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;",
      }}
      data-aos="zoom-in"
    >
      <CardMedia
        component="img"
        sx={{
          height: "80px",
          width: "80px",
          margin: "1rem",
          borderRadius: "50%",
          border: "4px solid #f0f0f9",
        }}
        image={require("../static/images/teams/masud-alom.jpeg")}
        title="green iguana"
      />

      <CardContent>
        <Typography variant="h5" component="div">
          Masud Alom
        </Typography>
        <Typography
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
          &ldquo; Lizards are a widespread group of squamate reptiles, with over
          6,000 species...
        </Typography>
      </CardContent>
    </Card>
  );
}
