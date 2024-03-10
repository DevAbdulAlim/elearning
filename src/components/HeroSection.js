import React from "react";
import { Typography, Button } from "@mui/material";

const FeatureSection = () => {
  const sectionStyle = {
    backgroundColor: "#202060",
    padding: "120px 0",
    textAlign: "center",
    color: "white",
  };

  const titleStyle = {
    marginBottom: "32px",
  };

  const descriptionStyle = {
    marginBottom: "48px",
  };

  const buttonStyle = {
    backgroundColor: "#3f51b5",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2f3a8d",
    },
  };

  return (
    <div style={sectionStyle}>
      <Typography variant="h2" style={titleStyle}>
        আমাদের সেবাসমূহ
      </Typography>
      <Typography variant="body1" style={descriptionStyle}>
        আমরা আপনাদের জন্য বিভিন্ন সেবা উন্নত করে যাচ্ছি যা আপনাকে বেটার লার্নিং
        এর অভিজ্ঞতা প্রদান করবে।
      </Typography>
      <Button variant="contained" style={buttonStyle}>
        সেবাসমূহ দেখুন
      </Button>
    </div>
  );
};

export default FeatureSection;
