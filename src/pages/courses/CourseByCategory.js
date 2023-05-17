import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";

import { courses } from "../../_mock/data";
import {
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Grid,
  styled,
  Typography,
  Divider,
  Rating,
  Pagination,
  TableContainer,
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

function PaginatedItems({ currentItems }) {
  let firstItem = currentItems.find((element) => element !== undefined);

  return (
    <>
      {Object.keys(currentItems).length === 0 && (
        <Navigate to="/" replace={true} />
      )}

      <h1>{firstItem.category}</h1>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {currentItems &&
          currentItems.map((item, id) => (
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
    </>
  );
}
export default function CourseByCategory({ itemsPerPage = 2 }) {
  const params = useParams();

  /*const result = courses.filter(
    (Category) => Category.id === parseInt(params.category)
  );*/

  const items = courses.filter(
    (Category) => Category.xCategory === params.category
  );

  /* if (Object.keys(result).length === 0) {
    console.log("empty");
  }
*/

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [selected, setSelected] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  useEffect(() => {
    const item = selected * itemsPerPage;
    setItemOffset(item);
  }, [selected]);

  return (
    <>
      <Box pt={8} pb={4} sx={{ backgroundColor: "#ECF2FF" }}>
        <Container sx={{ paddingBottom: "2rem" }}>
          <PaginatedItems currentItems={currentItems} />

          <Pagination
            sx={{
              marginTop: "4rem",
              "& .MuiPagination-ul": { justifyContent: "center" },
            }}
            color="primary"
            count={pageCount}
            onChange={(e, value) => setSelected(value - 1)}
          />
        </Container>
      </Box>
    </>
  );
}
