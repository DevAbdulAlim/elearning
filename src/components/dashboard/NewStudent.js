import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Fragment } from "react";

export default function NewStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const studentRegister = () => {
    axios.post(`/api/v1/student/new`, {
      name,
      email,
    });
    alert("register successfull");
    setName("");
    setEmail("");
    alert("clear input");
  };

  return (
    <Fragment>
      <form onSubmit={studentRegister}>
        <Stack pt="2rem" spacing={2} direction="column">
          <TextField
            required
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={() => studentRegister()}
            variant="contained"
            component="button"
          >
            Register
          </Button>
        </Stack>
      </form>
    </Fragment>
  );
}
