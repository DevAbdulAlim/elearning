import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";

export default function StudentList() {
  const [data, setData] = useState([]);

  const getStudent = async () => {
    const { data } = await axios.get("/api/v1/admin/students");
    setData(data.students);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`/api/v1/admin/student/${id}`);
    getStudent();
  };

  const updateStudent = (data) => {
    let { _id, name, email } = data;
    localStorage.setItem("id", _id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <Fragment>
      {!data ? (
        <Typography>Loading</Typography>
      ) : data.length === 0 ? (
        <Typography>No Student Found</Typography>
      ) : (
        <Fragment>
          {data.map((student) => (
            <Stack
              pt="1rem"
              key={student._id}
              direction="row"
              justifyContent="space-between"
            >
              <Typography>{student.name}</Typography>
              <Typography> {student.email}</Typography>
              <Stack direction="row" justifyContent="space-between">
                <Link
                  pr="1rem"
                  underline="none"
                  component={RouterLink}
                  to={"edit/" + student._id}
                  onClick={() => updateStudent(student)}
                >
                  <Button variant="contained">Edit</Button>
                </Link>

                <Button
                  onClick={() => deleteStudent(student._id)}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}
