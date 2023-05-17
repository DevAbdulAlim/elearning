import {
  Box,
  Card,
  Grid,
  Button,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import React, { Fragment } from "react";

const facts = [
  { name: "সফল শিক্ষার্থী", number: "২০০০০+" },
  { name: "ইন্ডাস্ট্রি এক্সপার্ট", number: "২০০+" },
  { name: "সাকসেস রেশিও", number: "৮৯%" },
  { name: "কোম্পানি কানেক্টেড", number: "৫০০+" },
];

export default function Facts() {
  return (
    <Fragment>
      <Box
        sx={{
          pt: 10,
          pb: 10,
        }}
      >
        <Container maxWidth="xxl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                sx={{ fontWeight: "bolder" }}
                color="text.primary"
                variant="h3"
                gutterBottom
              >
                <Typography color="text.primary" variant="h4" gutterBottom>
                  দেশ সেরা আইটি ট্রেনিং ইনস্টিটিউট
                </Typography>
                ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড
              </Typography>
              <Typography color="text.secondary" variant="p" gutterBottom>
                ই-লার্নিং অ্যান্ড আর্নিং, আইটিতে সাফল্য সৃষ্টির লক্ষ্যে
                প্রতিষ্ঠিত একটি বিশ্বস্ত প্রতিষ্ঠান। প্রতিষ্ঠা লগ্ন থেকে শুরু
                করে এখন পর্যন্ত সুদীর্ঘ ৬ বছরে ই-লার্নিং অ্যান্ড আর্নিং অর্জন
                করেছে বহুমুখী সাফল্য। অবদান রেখে চলেছে ডিজিটাল বাংলাদেশ
                বিনির্মাণে। বাংলাদেশের অন্যতম প্রধান আইটি প্রতিষ্ঠানটি ২০১৬ সাল
                থেকে বেকার সমস্যা দূর করতেও গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।
              </Typography>
              <br />
              <br />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#202060c9",
                  fontWeight: "bolder",
                  color: "#e6e6f0",
                }}
              >
                আমাদের সম্পর্কে
              </Button>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid
                container
                direction="row"
                spacing={4}
                justifyContent="space-around"
              >
                {facts.map((fact) => (
                  <Grid item xs={6} key={fact.name}>
                    <Stack
                      sx={{
                        boxShadow: "rgb(140 152 164 / 25%) 0px 3px 6px 0px",
                        height: 170,
                        padding: "1rem",
                        borderRadius: "1.5rem",
                        backgroundColor: "white",
                      }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        variant="h4"
                        fontWeight="bolder"
                        align="center"
                        gutterBottom
                        sx={{ color: "#202060" }}
                      >
                        {fact.number}
                      </Typography>
                      <Typography
                        sx={{ color: "#202060" }}
                        variant="h6"
                        align="center"
                        gutterBottom
                      >
                        {fact.name}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
