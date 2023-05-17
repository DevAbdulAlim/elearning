import { Fragment } from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Copyright() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "#343473",
          color: "white",
          pt: "3vh",
          pb: "3vh",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>
              © Copyright e-laeltd.com. All Rights Reserved
            </Typography>
            <Stack direction="row" spacing="2vh" alignItems="center">
              <Link
                underline="none"
                href="https://www.facebook.com/elaeltd.official"
              >
                <FaFacebook color="white" fontSize="2rem" />
              </Link>
              <Link underline="none" href="https://twitter.com/elaeltd2016">
                <FaTwitter color="white" fontSize="2rem" />
              </Link>
              <Link underline="none" href="https://twitter.com/elaeltd2016">
                <FaLinkedin color="white" fontSize="2rem" />
              </Link>
              <Link
                underline="none"
                href="https://www.youtube.com/channel/UCQSeJRz4mSQJHVGlbrHfa_A"
              >
                <FaYoutube color="white" fontSize="2rem" />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
}
