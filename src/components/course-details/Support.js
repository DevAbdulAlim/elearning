import React, { Fragment } from "react";
import {
  Grid,
  Card,
  Box,
  CssBaseline,
  Typography,
  Container,
} from "@mui/material";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const supports = [
  "অনলাইন লাইভ ব্যাচ",
  "লাইফটাইম সাপোর্ট",
  "রিভিউ ক্লাস",
  "লাইফটাইম সাপোর্ট",
  "লাইফটাইম সাপোর্ট",
  "রিভিউ ক্লাস",
];

export default function Support() {
  return (
    <Fragment>
      <Box mt="6vh" mb="6vh">
        <Container maxWidth="xxl">
          <Typography
            sx={{ color: "rgb(48, 48, 68)" }}
            align="center"
            variant="h4"
            component="h4"
            gutterBottom
          >
            আমাদের বিশেষ সেবা
          </Typography>
          <Grid container spacing={4}>
            {supports.map((support) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: 300,
                    p: "2vh",
                    textAlign: "center",
                    borderRadius: "2vh",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    color: "rgb(48, 48, 68)",
                  }}
                >
                  <HomeRepairServiceIcon sx={{ fontSize: 65 }} />
                  <Typography variant="h5" gutterBottom>
                    {support}
                  </Typography>
                  <Typography>
                    ট্রেনিং শেষ হলেও আপনার সঙ্গে সম্পর্ক কিন্তু শেষ নয়।
                    ক্রিয়েটিভ আইটির শিক্ষার্থী হিসেবে আপনি পাচ্ছেন লাইফ টাইম
                    সাপোর্ট। অনলাইনে ২৪/৭ সাপোর্ট পাচ্ছেন যেকোনো সময়। করে থাকেন।
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
