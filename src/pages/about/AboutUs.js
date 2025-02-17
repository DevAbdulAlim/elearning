import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";

export default function AboutUs() {
  const data = [
    {
      title: " আমাদের Mission",
      description:
        "আমাদের লক্ষ্য হল প্রশিক্ষণার্থীদের তাদের জ্ঞান, আইটি দক্ষতা এবং শিক্ষাগত মূল্যবোধকে শক্তিশালী করার মাধ্যমে তাদের সম্ভাব্যতা উপলব্ধি করতে এবং তাদের সক্ষম করার জন্য মানসম্পন্ন শিক্ষার সুযোগ প্রদান করা।",
    },
    {
      title: "আমাদের Vision",
      description:
        "শিক্ষাগত এবং পেশাদার আইটি প্রশিক্ষণে উৎকর্ষ কেন্দ্র হতে হবে। ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড-এ যে পরিষেবাগুলি দেওয়া হয়: ব্যবহারিক এবং প্রকল্প ভিত্তিক আইটি প্রশিক্ষণ কাস্টমাইজড পরিষেবা এবং অন-সাইট প্রশিক্ষণ সফট স্কিল ও লিডারশিপ ট্রেনিং স্কিল/ক্যারিয়ার ডেভেলপমেন্ট সার্ভিস প্রয়োজন-ভিত্তিক কর্পোরেট প্রশিক্ষণ এবং কর্মশালা সফ্টওয়্যার উন্নয়ন, এবং বিশ্লেষণ ওয়েব ডিজাইন ও ডেভেলপমেন্ট আউটসোর্সিং প্রশিক্ষণ ও সুযোগ প্রশিক্ষণ এবং বহুমুখী রুম ভাড়া পরিষেবা",
    },
    {
      title: "আপনি কেন ই-লার্নিং এবং আর্নিং লিমিটেড বেছে নেবেন?",
      description:
        "ই-লার্নিং এবং আর্নিং লিমিটেড-এ যাওয়া স্কুলে ফিরে যাওয়ার মতো নয়, আমরা আলাদা কারণ আমাদের তথ্য প্রযুক্তিতে একটি শক্তিশালী পদচিহ্ন রয়েছে। আমাদের সমস্ত প্রশিক্ষকদের বিস্তৃত পেশাদারের পাশাপাশি প্রশিক্ষণের অভিজ্ঞতা, বিক্রেতা-অনুমোদিত, আপ-টু-ডেট কোর্স সামগ্রী রয়েছে। আমাদের বিস্তৃত এক্সপোজারের কারণে, আমরা আমাদের প্রশিক্ষণ প্রোগ্রামগুলিতে প্রয়োগ করা শিল্পের সাম্প্রতিক উন্নয়ন সম্পর্কে সচেতন।",
    },
    {
      title: "প্রতিটি প্রোগ্রাম নিম্নলিখিত উপর ভিত্তি করে কাস্টমাইজ করা হয়",
      description:
        "অংশগ্রহণকারীদের প্রোফাইল কর্মসূচির উদ্দেশ্য একটি সুপার প্রশিক্ষণ পরিবেশ উপভোগ করুন আমাদের উদ্বেগ ইউনিট এবং অন্যান্য কর্পোরেটগুলিতে চাকরি সহায়তা",
    },
  ];
  return (
    <Fragment>
      <Box pb={4}>
        <Container maxWidth="xxl">
          <Stack pt={6} pb={6} direction="column" spacing={4}>
            <Typography variant="h3" align="center" gutterBottom>
              আমাদের সম্পর্কে
            </Typography>
            <Typography
              sx={{ color: "text.secondary" }}
              align="center"
              gutterBottom
            >
              মাস্টার ডিজিটাল মার্কেটিং কৌশল, সোশ্যাল মিডিয়া মার্কেটিং, এসইও,
              ইউটিউব, ইমেল, ফেসবুক মার্কেটিং, অ্যানালিটিক্স এবং আরও অনেক কিছু!
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box pt={8} pb={8} sx={{ backgroundColor: "#ECF2FF" }}>
        <Container maxWidth="xxl">
          <Grid pt={4} container spacing={4}>
            <Grid item sm={12}>
              <Grid container spacing={4}>
                <Grid item md={12} lg={6}>
                  <Typography variant="h4" gutterBottom>
                    আমাদের গল্প
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড 2016 সাল থেকে সর্বাগ্রে
                    তথ্য প্রযুক্তি পরিষেবা প্রদানকারী। প্রতিটি সাংগঠনিক
                    উন্নয়নের প্রয়োজন মোকাবেলা করার জন্য আমাদের অনুসন্ধানে,
                    আমরা বিভিন্ন প্রশিক্ষণ প্রোগ্রাম অফার করি, যা এক্সিকিউটিভ
                    কোচিং এবং লিডারশিপ ট্রেনিং থেকে শুরু করে মৌলিক যোগাযোগ
                    দক্ষতা পর্যন্ত। আমরা EC কাউন্সিল, গ্রাফিক্স, ভিএম ওয়্যার,
                    মাইক্রোসফ্ট, সিসকো, ওরাকল এবং অন্যান্যদের মধ্যে রেড হ্যাট
                    সার্টিফিকেশন সহ বিস্তৃত আইটি সার্টিফিকেশন প্রোগ্রাম অফার
                    করি। আমাদের প্রশিক্ষণ অফিসিয়াল বিক্রেতা পাঠ্যক্রম,
                    প্রশিক্ষকের নেতৃত্বে নির্দেশাবলী এবং উপস্থাপনা, হ্যান্ডস-অন
                    সিমুলেশন এবং ব্যায়াম, গ্রুপ আলোচনা, পর্যালোচনা সেশন এবং
                    তাদের বাস্তব জীবনের অভিজ্ঞতার ভাণ্ডারকে একত্রিত করে।
                    ই-লার্নিং এবং আর্নিং লিমিটেড হাতে-কলমে চাকরি-ভিত্তিক
                    প্রশিক্ষণ প্রদান করে। এটি শুধুমাত্র অংশগ্রহণকারীদের
                    সার্টিফিকেশন পরীক্ষার জন্য প্রস্তুত করে না বরং তাদের
                    কর্মক্ষেত্রে অবিলম্বে নতুন অর্জিত জ্ঞান প্রয়োগ করতে সাহায্য
                    করে।
                  </Typography>
                </Grid>
                <Grid item md={12} lg={6}>
                  <CardMedia
                    component="img"
                    src={require("../../static/images/about.jpg")}
                    height="400px"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="stretch"
                spacing={{ xs: 4, md: 6, lg: 8 }}
              >
                {data.map((item) => (
                  <Grid item sm={12} md={6}>
                    <Card
                      sx={{
                        borderTop: "1rem solid #7395bd",
                        height: "100%",
                        padding: {
                          xs: "1rem",
                          sm: "2rem",
                          md: "3rem",
                          lg: "4rem",
                        },
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {item.description}
                      </Typography>
                    </Card>
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
