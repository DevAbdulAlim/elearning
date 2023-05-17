import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import ProfileCard from "../../components/ProfileCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box pt={8} pb={8} sx={{ backgroundColor: "#ecf2ff" }}>
      <Container maxWidth="xxl">
        <Typography align="center" variant="h3" gutterBottom>
          TEAM MANAGEMENT
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="basic tabs example"
          >
            <Tab label="MANAGEMENT TEAM" {...a11yProps(0)} />
            <Tab label="TRAINING DEPARTMENT" {...a11yProps(1)} />
            <Tab label="BUSINESS DEVELOPMENT" {...a11yProps(2)} />
            <Tab label="WEBSITE & SOFTWARE DEVELOPER" {...a11yProps(3)} />
            <Tab label="DIGITAL MARKETING & SEO" {...a11yProps(4)} />
            <Tab label="HR & ACCOUNTS DEPARTMENT" {...a11yProps(5)} />
            <Tab label="IT SUPPORT" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box sx={{ height: "80vh", overflow: "auto", padding: "1rem" }}>
            <ProfileCard />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ height: "80vh", overflow: "auto" }}>
            <ProfileCard />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={{ height: "80vh", overflow: "auto" }}>
            <ProfileCard />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={{ height: "80vh", overflow: "auto" }}>
            <ProfileCard />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box sx={{ height: "80vh", overflow: "auto" }}>
            <ProfileCard />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Box sx={{ height: "80vh", overflow: "auto" }}>
            <ProfileCard />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Box sx={{ height: "80vh", overflow: "auto" }}>
            <ProfileCard />
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
}
