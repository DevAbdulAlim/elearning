import React from "react";
import { Link } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";

import { courses } from "../../_mock/data";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Box,
  Grid,
  styled,
  Typography,
  Divider,
  Rating,
} from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import cardImage from "../../static/images/cardImage.jpg";

const CustomCard = styled(Card)`
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;

function CourseByCategory() {
  const params = useParams();

  /*const result = courses.filter(
    (Category) => Category.id === parseInt(params.category)
  );*/

  const result = courses.filter(
    (Category) => Category.xCategory === params.category
  );

  /* if (Object.keys(result).length === 0) {
    console.log("empty");
  }
*/
  let firstItem = result.find((element) => element !== undefined);
  return (
    <>
      {Object.keys(result).length === 0 && <Navigate to="/" replace={true} />}

      <Box pt={8} pb={8} sx={{ backgroundColor: "aliceblue" }}>
        <Container sx={{ paddingBottom: "2rem" }}>
          <h1>{firstItem.category}</h1>
          <Grid
            container
            spacing={{ xs: 4, sm: 4, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {result.map((item, id) => (
              <Grid item xs={4} sm={4} md={4} key={id}>
                <CustomCard className="card">
                  <CardMedia
                    component="img"
                    height="250"
                    image={cardImage}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      ১৫,০০০ রিভিউস
                    </Typography>
                    <br />
                    <div>
                      <Typography variant="h5">60,000 &#2547;</Typography>
                      <Link to={item.xName}>
                        <Button variant="contained">
                          বিস্তারিত দেখুন
                          <ReadMoreIcon />
                        </Button>
                      </Link>
                    </div>
                    <Typography></Typography>
                  </CardContent>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default CourseByCategory;
