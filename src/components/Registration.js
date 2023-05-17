import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const studentRegister = (e) => {
    e.preventDefault();
    axios.post(`/api/v1/student/new`, {
      name,
      email,
    });
    navigate("/");
  };

  return (
    <Fragment>
      <Box mt={4} mb={4}>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item sm={12} md={6}></Grid>
            <Grid item sm={12} md={6}>
              <form onSubmit={studentRegister}>
                <Stack pt="2rem" spacing={2} direction="column">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                  />
                  <button>Register</button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
