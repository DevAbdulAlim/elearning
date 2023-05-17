import * as React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Fragment } from "react";

import logo from "../../static/images/logo.png";
import { useScrollTrigger } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { name: "হোম", path: "/" },
  { name: "আমাদের সম্পর্কে", path: "about" },
  { name: "সার্ভিসেস ", path: "services" },

  { name: "কোর্সসমুহ", path: "courses" },

  // { name: "সার্টিফিকেট", path: "certificate" },

  { name: "যোগাযোগ", path: "contact" },

  { name: "শাখাসমূহ ", path: "branch" },
];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        p: 1.5,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} width="100%" height="40" alt="E-Learning" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{ textAlign: "center", borderRadius: "2rem" }}
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: "#434382",
                      color: "white",
                    }
                  : { color: "#32305e" }
              }
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "white",
            color: "#32305e",
          }}
          position="sticky"
          component="nav"
        >
          <Container maxWidth="xxl">
            <Toolbar disableGutters>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: "#32305e", display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component={RouterLink}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={logo} width="100%" height="40" alt="E-Learning" />
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component={RouterLink}
                to="/"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  textAlign: { xs: "end", sm: "center" },
                  display: { xs: "block", sm: "block", md: "none" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={logo} width="50%" height="30" alt="E-Learning" />
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {navItems.map((item, index) => (
                  <Link
                    underline="none"
                    key={index}
                    component={RouterLink}
                    to={item.path}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            borderBottom: "4px solid #202060",
                          }
                        : { borderBottom: "none" }
                    }
                  >
                    <Button
                      sx={{
                        my: 2,
                        color: "#202060",
                        fontSize: "2vh",
                        fontWeight: "bolder",
                        display: "block",
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Fragment>
  );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appbar;
