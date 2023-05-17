import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { MdDashboard } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

import Login from "./components/dashboard/Login";
const drawerWidth = 240;

export default function ProtectedRoute() {
  const [token, setToken] = React.useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Link
            color="inherit"
            underline="none"
            component={RouterLink}
            to="/dashboard"
          >
            <Typography variant="h6" noWrap component="div">
              E-LEARNING AND EARNING LTD
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { name: "Dashboard", link: "/dashboard" },
              { name: "Student", link: "student" },
            ].map((text, index) => (
              <Link
                key={text}
                color="inherit"
                underline="none"
                component={RouterLink}
                to={text.link}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <MdDashboard fontSize="1.5rem" />
                      ) : (
                        <MdPermIdentity fontSize="1.5rem" />
                      )}
                    </ListItemIcon>

                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
