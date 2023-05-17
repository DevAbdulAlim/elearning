import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CssBaseline,
  Grid,
  ListItem,
  Typography,
  Stack,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Fullscreen } from "@mui/icons-material";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoMdListBox } from "react-icons/io";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { MdDoneAll } from "react-icons/md";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;",
  marginBottom: "1rem",
  position: "initial",
  borderRadius: "0.5rem",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "1.5rem",
          color: "#202060",
          fontWeight: "bolder",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  color: "black",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "none",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "none",
}));

export default function Syllabus() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Fragment>
      <Box
        my={4}
        p={4}
        sx={{ backgroundColor: "#e3ffe1", borderRadius: "10px" }}
      >
        <Typography sx={{ color: "rgb(48, 48, 68)" }} mb="3vh" variant="h4">
          কোর্স কারিকুলাম
        </Typography>
        <Grid container spacing="3rem">
          <Grid item>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Collapsible Group Item </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <List>
                    {[...Array(6)].map((item) => (
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <MdDoneAll />
                          </ListItemIcon>
                          <ListItemText primary="What is React? What does it do?" />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Collapsible Group Item #2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>Collapsible Group Item #3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>{" "}
        </Grid>
      </Box>
    </Fragment>
  );
}
