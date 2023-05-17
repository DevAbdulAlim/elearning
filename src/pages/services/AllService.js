import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function AllService() {
  return (
    <Box pt={8} pb={8}>
      <Container maxWidth="xxl">
        <Typography pb={4} align="center" variant="h3" gutterBottom>
          সমস্ত পরিষেবা
        </Typography>
        <Grid container spacing={8}>
          {[...Array(3)].map((item, index) => {
            let direction = "row";
            if (index % 2 !== 0) {
              direction = "row-reverse";
            }

            return (
              <Grid item xs={12}>
                <Card
                  sx={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;",
                    background: "#ECF2FF",
                  }}
                >
                  <Grid
                    container
                    direction={{
                      xs: "column-reverse",
                      md: `${direction}`,
                    }}
                    spacing={2}
                  >
                    <Grid item xs={12} md={7}>
                      <Stack
                        p={{ xs: "1rem", md: "2rem", lg: "4rem" }}
                        elevation="0"
                        spacing={3}
                      >
                        <Typography variant="h4">
                          আইটি ট্রেনিং সার্ভিসেস
                        </Typography>
                        <Typography color="text.secondary">
                          আইটি প্রশিক্ষণ তথ্য প্রযুক্তি (আইটি) শিল্প বা তথ্য
                          প্রযুক্তির কাজ সম্পাদনের জন্য প্রয়োজনীয় দক্ষতার জন্য
                          নির্দিষ্ট।
                        </Typography>
                        <List>
                          {[...Array(4)].map((item) => (
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleIcon sx={{ color: "darkblue" }} />
                              </ListItemIcon>
                              <ListItemText primary="আজীবন আপডেট এবং ভূমিকা এবং কাজ" />
                            </ListItem>
                          ))}
                        </List>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <CardMedia
                        height="100%"
                        component="img"
                        src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-07/future-artificial-intelligence.png"
                        alt="traning institute"
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
