import React, { Fragment } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  CssBaseline,
  Typography,
  Box,
  Grid,
  ListItem,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const questions = [
  {
    name: "Sit amet consectetur adipiscing elit duis tristique sollicitudin?",
    details:
      "eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
  },
  {
    name: "Sit amet ristique sollicitudin?",
    details:
      "eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
  },
  {
    name: "Sit amet con sollicitudin?",
    details:
      "eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
  },
  {
    name: "Sit ametelit duis tristique sollicitudin?",
    details:
      "eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
  },
  {
    name: "Sit amet consectetur adipiscing elit duis tristique sollicitudin?",
    details:
      "eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
  },
  {
    name: "Sit amet consectetu?",
    details:
      "eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
  },
];

export default function Questions() {
  return (
    <Fragment>
      <Box mt={8} mb={8} pt={8} pb={8}>
        <Container maxWidth="xl">
          {questions.map((item) => (
            <Accordion key="item.name">
              <AccordionSummary
                expandIcon={<ExpandCircleDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <QuestionAnswerIcon />
                  {item.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </Fragment>
  );
}
