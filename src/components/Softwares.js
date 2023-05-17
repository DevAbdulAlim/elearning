import {
  Box,
  Grid,
  Card,
  CardMedia,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";

const icons = [SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiFigma];

export default function Softwares(props) {
  return (
    <Box my={4} p={4} sx={{ backgroundColor: "#e3ffe1", borderRadius: "10px" }}>
      <Typography sx={{ color: "rgb(48, 48, 68)" }} mb="3vh" variant="h4">
        যেসব সফটওয়্যার শেখানো হয়
      </Typography>
      <Grid container spacing={4}>
        {props.data.technologies.map((technology, id) => {
          const Icons = icons[id];

          return (
            <Grid item xs={12} sm={6} md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing="1vh"
              >
                <Icons color="#001d34" fontSize="5vh" />
                <Typography>{technology}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
