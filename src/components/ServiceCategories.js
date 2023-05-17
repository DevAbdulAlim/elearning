import React, { Fragment } from "react";

import {
  Box,
  Container,
  Card,
  Link,
  Grid,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import webDesign from "../static/images/icons/web-design.png";

const courseCategories = [
  { categoryName: "Networking", name: "net" },
  { categoryName: "Web Desing & Development", name: "web" },
  { categoryName: "Programming", name: "" },
  { categoryName: "Apps Development", name: "" },
  { categoryName: "Networking", name: "" },
  { categoryName: "Web Desing & Development", name: "" },
  { categoryName: "Programming", name: "" },
  { categoryName: "Apps Development", name: "" },
  { categoryName: "Networking", name: "" },
  { categoryName: "Web Desing & Development", name: "" },
];

export default function ServiceCategories() {
  const cat = "/course-cat/";

  return (
    <Fragment>
      <Box pb={8} data-aos="zoom-in-right" data-aos-duration="800">
        <Typography
          fontWeight="bolder"
          color="#504f6c"
          variant="h4"
          gutterBottom
        >
          জনপ্রিয় ক্যাটাগরী{" "}
        </Typography>
        <Typography color="text.secondary" mb={4}>
          বর্তমান বিশ্বের সব ট্রেন্ডি এবং চাহিদাসম্পন্ন সব কোর্স রয়েছে ক্রিয়েটিভ
          আইটি ইন্সটিটিউটে। কোর্স করার সময় যে প্রয়োজনীয় কনফিগারেশনের কম্পিউটার
          দরকার, তার সবই রয়েছে আমাদের ল্যাবে। আপনি চাইলেই ক্লাসের পরে ল্যাবে বসে
          কোর্স বিষয়ক যেকোনো কিছু প্র্যাকটিস করতে পারেন। প্রতিটি কোর্স এমনভাবে
          ডিজাইন করা হয়েছে যাতে আপনি কোর্স শেষে প্রতিটি টপিকে কাজ করার
          আত্মবিশ্বাস পান।
        </Typography>

        <Grid
          container
          justifyContent="center"
          spacing={4}
          columns={{ xs: 4, sm: 6, md: 8, lg: 10 }}
        >
          {courseCategories.map((category) => (
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              data-aos="zoom-in-left"
              data-aos-duration="800"
            >
              <Card
                sx={{
                  height: 190,
                  boxShadow: "rgb(0 0 0 / 5%) 0px 1px 2px 0px",
                  borderRadius: "1rem",
                  padding: "0.3rem",
                }}
              >
                <Link
                  draggable="false"
                  underline="none"
                  component={RouterLink}
                  to={cat + category.name}
                >
                  <Paper
                    align="center"
                    elevation={0}
                    sx={{ padding: "1.5rem" }}
                  >
                    <img height="70px" width="70px" src={webDesign} alt="..." />
                  </Paper>
                  <Typography align="center">
                    {category.categoryName}
                  </Typography>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
}
