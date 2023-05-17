import {
  Box,
  Button,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import mystyle from "./mystyle.module.css";

const validationSchema = yup.object({
  name: yup
    .string("Enter your email")
    .required("name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: yup
    .string("Enter your password")
    .email("Enter a valid email")
    .required("Email is required"),
});

export default function Registration() {
  const navigate = useNavigate();
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");

  // const studentRegister = (e) => {
  //   e.preventDefault();
  //   axios.post(`/api/v1/student/new`, {
  //     name,
  //     email,
  //   });
  //   navigate("/");
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post(`/api/v1/student/new`, values);
      navigate("/");
    },
  });

  return (
    <Fragment>
      <Box mt={5} mb={5}>
        <Container maxWidth="xxl">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item sm={12} md={6}>
              <CardMedia
                component="img"
                src={require("../../static/images/registration.webp")}
              />
            </Grid>
            <Grid
              p={{ xs: "1rem", md: "2rem", lg: "4rem" }}
              item
              xs={12}
              md={6}
            >
              <form onSubmit={formik.handleSubmit}>
                <Stack pt="2rem" spacing={2} direction="column">
                  <Typography variant="h6" gutterBottom>
                    আপনার কোন প্রশ্ন থাকলে আমাদের করুন
                  </Typography>
                  {/* <input
                    className={mystyle.registerInput}
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="আপনার নাম"
                  /> */}
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  {/* <input
                    className={mystyle.registerInput}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="আপনার ই-মেইল"
                  /> */}
                  {/* <button className={mystyle.registerButton}>সাবমিট</button> */}
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
