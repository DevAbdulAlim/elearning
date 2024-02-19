import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/system"; // Import styled from @mui/system

const HeroContainer = styled(Box)({
  backgroundImage: "url('https://example.com/your-hero-image.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "64px 0", // You can adjust the padding as needed
});

const Overlay = styled(Box)({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const HeroText = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "16px",
});

const HeroDescription = styled(Typography)({
  marginBottom: "32px",
});

const ExploreButton = styled(Button)({
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container>
        <Overlay>
          <HeroText variant="h2">
            Unlock Your Potential with Our Courses
          </HeroText>
          <HeroDescription variant="subtitle1">
            Empower yourself through learning. Explore a wide range of courses
            designed for your success.
          </HeroDescription>
          <ExploreButton variant="contained" color="secondary" href="/courses">
            Explore Courses
          </ExploreButton>
        </Overlay>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
