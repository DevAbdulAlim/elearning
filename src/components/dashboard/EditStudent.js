import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditStudent() {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateAPIData = () => {
    axios.put(`/api/v1/admin/student/${id}`, {
      name,
      email,
    });
    let keysToRemove = ["id", "name", "email"];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    navigate("/dashboard/student");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="column" spacing={5}>
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
        <Button onClick={() => updateAPIData()} variant="contained">
          Update
        </Button>
      </Stack>
    </Box>
  );
}
