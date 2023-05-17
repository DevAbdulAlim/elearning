import { Fragment, useState } from "react";
import { PropTypes } from "prop-types";
import { Box, Container, Stack } from "@mui/material";
import axios from "axios";
import loginStyle from "./loginStyle.module.css";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`/api/v1/admin/user/login`, {
        email,
        password,
      })
      .then((response) => setToken(response.data.token))
      .catch((error) => console.log(error.message));
  };

  return (
    <Fragment>
      <Box pt="30vh">
        <Container>
          <form onSubmit={submitHandler}>
            <Stack
              spacing={4}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <input
                required
                className={loginStyle.registerInput}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ই-মেইল আইডি  "
              />
              <input
                className={loginStyle.registerInput}
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="আপনার পাসওয়ার্ড
                "
              />

              <button className={loginStyle.registerButton}>সাবমিট</button>
            </Stack>
          </form>
        </Container>
      </Box>
    </Fragment>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
