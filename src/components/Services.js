import React, { Fragment } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  styled,
  Stack,
  useTheme,
} from "@mui/material";

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#f9f9ff",
  borderRadius: "5%",
  margin: "auto",
  height: "400px",
  boxShadow: theme.shadows[6],
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translate(0px, -3px)",
    borderBottom: "5px solid #232088",
    cursor: "pointer",
  },
}));

export default function Services() {
  const theme = useTheme();

  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ pt: 4, pb: 4 }}>
        <Typography p="3rem 0" variant="h4" align="center" gutterBottom>
          আমাদের জনপ্রিয় সেবাসমুহ
        </Typography>

        <Grid container spacing={4}>
          {/* Service Cards */}
          {[
            {
              title: "আইটি ট্রেনিং সার্ভিসেস",
              image: require("../static/images/services/it.jpg"),
              description:
                "আইটি প্রশিক্ষণ তথ্য প্রযুক্তি (আইটি) শিল্প বা তথ্য প্রযুক্তির কাজ সম্পাদনের জন্য প্রয়োজনীয় দক্ষতার জন্য নির্দিষ্ট।",
            },
            {
              title: "ইকমার্স প্ল্যাটফর্ম সলিউশন",
              image: require("../static/images/services/ecommerce.webp"),
              description:
                "একটি ইকমার্স প্ল্যাটফর্ম হল এমন একটি সফ্টওয়্যার যা একটি অনলাইন স্টোর তাদের সমস্ত বণিক কেনার চাহিদা এবং তাদের নিজস্ব বিক্রেতার চাহিদাগুলি পরিচালনা করতে মোতায়েন করে৷",
            },
            {
              title: "AI ডিপ লার্নিং সলিউশন",
              image: require("../static/images/services/ai.jpg"),
              description:
                "ডিপ লার্নিং হল এক ধরণের মেশিন লার্নিং এবং কৃত্রিম বুদ্ধিমত্তা (AI) যা মানুষের নির্দিষ্ট ধরণের জ্ঞান অর্জনের উপায় অনুকরণ করে।",
            },
            {
              title: "IT ইনফ্রাস্ট্রাকচার সলিউশন",
              image: require("../static/images/services/itin.jpg"),
              description:
                "তথ্য প্রযুক্তি (আইটি) অবকাঠামো হল এন্টারপ্রাইজ আইটি পরিবেশ পরিচালনা ও পরিচালনার জন্য প্রয়োজনীয় উপাদান।",
            },
            {
              title: "সাইবার সিকিউরিটি সলিউশন",
              image: require("../static/images/services/cyber.jpg"),
              description:
                "আকস্মিক দুর্ঘটনাজনিত কারণে বা অবাঞ্ছিত ব্যক্তি কর্তৃক কম্পিউটারের ব্যবহৃত তথ্যের ক্ষতিসাধন, পরিবর্তন বা গোপনীয়তা ফাঁসের বিরুদ্ধে নিরাপত্তামূলক ব্যবস্থাকে কম্পিউটারের নিরাপত্তা বলে।",
            },
            {
              title: "ক্লাউড বেস্‌ড ERP সলিউশন",
              image: require("../static/images/services/erp.jpg"),
              description:
                "ক্লাউড-ভিত্তিক ইআরপি হল এন্টারপ্রাইজ রিসোর্স প্ল্যানিং সফ্টওয়্যার এবং সরঞ্জামগুলির একটি সিস্টেম যা আপনার বিক্রেতার দ্বারা ক্লাউডে অফসাইট হোস্ট এবং পরিচালিত হয়।",
            },
          ].map((service, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CustomCard>
                <CardMedia
                  component="img"
                  height="194"
                  sx={{
                    clipPath: " polygon(0 0, 100% 0%, 100% 91%, 0% 100%)",
                  }}
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" variant="p">
                    {service.description}
                  </Typography>
                </CardContent>
              </CustomCard>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Stack
          p="3rem 0"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="outlined">সবগুলি দেখুন &gt;&gt;</Button>
        </Stack>
      </Container>
    </Fragment>
  );
}
