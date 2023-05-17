import { Grid, Card, Box, Typography, CardMedia, Stack } from "@mui/material";
import freelancer from "../static/images/who-can-learn/freelancer.png";
import job from "../static/images/who-can-learn/job.webp";
import student from "../static/images/who-can-learn/student.webp";
import hosewife from "../static/images/who-can-learn/housewife.webp";
import { borderRadius, width } from "@mui/system";

const peoples = [
  { id: 1, name: " ফ্রিল্যান্সিং এ আগ্রহী" },
  { id: 1, name: " চাকুরী প্রত্যাশী" },
  { id: 1, name: " ছাত্র-ছাত্রী" },
];

export default function WhoCanLearn() {
  return (
    <Box my={4} p={4} sx={{ backgroundColor: "#e3ffe1", borderRadius: "10px" }}>
      <Typography
        sx={{ color: "rgb(48, 48, 68)" }}
        mb="3vh"
        variant="h4"
        gutterBottom
      >
        এই কোর্স যাদের জন্য
      </Typography>
      <Grid container spacing={4}>
        {peoples.map((people) => (
          <Grid item xs={12} sm={6} lg={4}>
            <Card
              sx={{
                padding: "1vh",
                borderRadius: "1rem",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                color: "rgb(48, 48, 68)",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                m={4}
              >
                <CardMedia component="img" image={freelancer} />
              </Stack>
              <Typography component="p" align="center" my={2}>
                {people.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
