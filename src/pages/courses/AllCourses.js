import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { element } from "prop-types";
import React from "react";
import { Fragment } from "react";
import CourseCategories from "../../components/ServiceCategories";
import { courses } from "../../_mock/data";
import CourseCard from "./CourseCard";

export default function AllCourses() {
  const categories = courses.map((course) => course.category);
  const filteredCategories = [...new Set(categories)];

  return (
    <Fragment>
      <Box pt={8} pb={8} sx={{ backgroundColor: "#ECF2FF" }}>
        <Container maxWidth="xl">
          <CourseCategories />
          <Box>
            <Typography
              align="center"
              color="#504f6c"
              variant="h4"
              fontWeight="bolder"
            >
              সকল কোর্সে ভর্তি চলছে
            </Typography>
            <Typography color="text.secondary" align="center" gutterBottom>
              দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি,
              সেগুলো অন্তর্ভুক্ত করেই সাজানো হয়েছে আমাদের কোর্সের তালিকা। এখান
              থেকে আপনার সুবিধামত অনলাইন বা অফলাইনে কোর্সে এনরোল করতে পারবেন
              যেকোনো সময়।
            </Typography>
          </Box>

          {filteredCategories.map((cat, i) => {
            let result = courses
              .filter(
                (filteredCourse, index) => filteredCourse.category === cat
              )
              .slice(0, 3);

            return (
              <>
                <Typography
                  sx={{
                    marginTop: "4rem",
                    textAlign: { xs: "center", md: "left" },
                  }}
                  key={i}
                  variant="h4"
                >
                  {cat}
                </Typography>
                <Grid pt={8} container spacing={4}>
                  {result &&
                    result.map((item, i) => (
                      <CourseCard key={i} course={item} />
                    ))}
                </Grid>
              </>
            );
          })}
        </Container>
      </Box>
    </Fragment>
  );
}
