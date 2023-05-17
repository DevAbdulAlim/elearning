import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
  autocompleteClasses,
  SvgIcon,
  Stack,
  Button,
} from "@mui/material";
import React, { Fragment } from "react";
import SchoolIcon from "@mui/icons-material/School";

import webi from "../static/images/services/webi.png";
import { ReactComponent as Webs } from "../static/images/services/webs.svg";

import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineDeveloperMode } from "react-icons/md";

const CustomCard = styled(Card)`
  background-color: #f9f9ff;
  border-radius: 5%;
  margin: auto;

  height: 400px;
  box-shadow: rgb(140 152 164 / 25%) 0px 3px 6px 0px;
  :hover {
    transform: translate(0px, -3px);
    transition: all 0.2s ease-in-out 0s;
    border-bottom: 5px solid #232088;
    cursor: pointer;
  }
`;

export default function Services() {
  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ pt: 4, pb: 4 }}>
        <Typography p="3rem 0" variant="h4" align="center" gutterBottom>
          আমাদের জনপ্রিয় সেবাসমুহ
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardMedia
                component="img"
                height="194"
                sx={{ clipPath: " polygon(0 0, 100% 0%, 100% 91%, 0% 100%)" }}
                image={require("../static/images/services/it.jpg")}
                alt="Artificial Intelligence"
              />

              <CardContent>
                <Typography variant="h5" gutterBottom>
                  আইটি ট্রেনিং সার্ভিসেস
                </Typography>
                <Typography color="text.secondary" variant="p" gutterBottom>
                  আইটি প্রশিক্ষণ তথ্য প্রযুক্তি (আইটি) শিল্প বা তথ্য প্রযুক্তির
                  কাজ সম্পাদনের জন্য প্রয়োজনীয় দক্ষতার জন্য নির্দিষ্ট।
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardMedia
                component="img"
                height="194"
                sx={{ clipPath: " polygon(0 0, 100% 0%, 100% 91%, 0% 100%)" }}
                image={require("../static/images/services/ecommerce.webp")}
                alt="Artificial Intelligence"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  ইকমার্স প্ল্যাটফর্ম সলিউশন
                </Typography>
                <Typography color="text.secondary" variant="p">
                  একটি ইকমার্স প্ল্যাটফর্ম হল এমন একটি সফ্টওয়্যার যা একটি
                  অনলাইন স্টোর তাদের সমস্ত বণিক কেনার চাহিদা এবং তাদের নিজস্ব
                  বিক্রেতার চাহিদাগুলি পরিচালনা করতে মোতায়েন করে৷
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardMedia
                component="img"
                height="194"
                sx={{ clipPath: " polygon(0 0, 100% 0%, 100% 91%, 0% 100%)" }}
                image={require("../static/images/services/ai.jpg")}
                alt="Web Development"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  AI ডিপ লার্নিং সলিউশন
                </Typography>
                <Typography color="text.secondary" variant="p">
                  ডিপ লার্নিং হল এক ধরণের মেশিন লার্নিং এবং কৃত্রিম বুদ্ধিমত্তা
                  (AI) যা মানুষের নির্দিষ্ট ধরণের জ্ঞান অর্জনের উপায় অনুকরণ
                  করে।
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardMedia
                component="img"
                height="194"
                sx={{ clipPath: " polygon(0 0, 100% 0%, 100% 91%, 0% 100%)" }}
                image={require("../static/images/services/itin.jpg")}
                alt="Web Development"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  IT ইনফ্রাস্ট্রাকচার সলিউশন
                </Typography>
                <Typography color="text.secondary" variant="p">
                  তথ্য প্রযুক্তি (আইটি) অবকাঠামো হল এন্টারপ্রাইজ আইটি পরিবেশ
                  পরিচালনা ও পরিচালনার জন্য প্রয়োজনীয় উপাদান।
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardMedia
                component="img"
                height="194"
                sx={{ clipPath: " polygon(0 0, 100% 0%, 100% 91%, 0% 100%)" }}
                image={require("../static/images/services/cyber.jpg")}
                alt="Web Development"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  সাইবার সিকিউরিটি সলিউশন
                </Typography>
                <Typography color="text.secondary" variant="p">
                  আকস্মিক দুর্ঘটনাজনিত কারণে বা অবাঞ্ছিত ব্যক্তি কর্তৃক
                  কম্পিউটারের ব্যবহৃত তথ্যের ক্ষতিসাধন, পরিবর্তন বা গোপনীয়তা
                  ফাঁসের বিরুদ্ধে নিরাপত্তামূলক ব্যবস্থাকে কম্পিউটারের নিরাপত্তা
                  বলে।
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardMedia
                component="img"
                height="194"
                sx={{ clipPath: " polygon(0 0, 100% 0%, 100% 91%, 0% 100%)" }}
                image={require("../static/images/services/erp.jpg")}
                alt="Web Development"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  ক্লাউড বেস্‌ড ERP সলিউশন
                </Typography>
                <Typography color="text.secondary" variant="p">
                  ক্লাউড-ভিত্তিক ইআরপি হল এন্টারপ্রাইজ রিসোর্স প্ল্যানিং
                  সফ্টওয়্যার এবং সরঞ্জামগুলির একটি সিস্টেম যা আপনার বিক্রেতার
                  দ্বারা ক্লাউডে অফসাইট হোস্ট এবং পরিচালিত হয়।
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
        </Grid>
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
