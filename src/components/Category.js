import React, { Fragment, useState, useRef } from "react";
import Slider from "react-slick";

import {
  Box,
  Container,
  Card,
  CardContent,
  Grid,
  styled,
  Typography,
  getIconButtonUtilityClass,
} from "@mui/material";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

const CustomCard = styled(Card)`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;

const courseCategories = [
  { categoryName: "Networking", name: "net" },
  { categoryName: "Web Desing & Development", name: "web" },
  { categoryName: "Programming", name: "" },
  { categoryName: "Apps Development", name: "" },
  { categoryName: "Networking", name: "" },
  { categoryName: "Web Desing & Development", name: "" },
  { categoryName: "Programming", name: "" },
  { categoryName: "Apps Development", name: "" },
];

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Category() {
  const cat = "course-cat/";
  return (
    <Fragment>
      <Box pt={2} pb={2} sx={{ backgroundColor: "azure" }}>
        <Container maxWidth="xl">
          <div>
            <Slider {...settings}>
              {courseCategories.map((category) => (
                <Grid container spacing={4}>
                  <Grid item>
                    <Link to={cat + category.name}>
                      <Card sx={{ height: 200 }}>{category.categoryName}</Card>
                    </Link>
                  </Grid>
                </Grid>
              ))}
            </Slider>
          </div>
        </Container>
      </Box>
    </Fragment>
  );
}
