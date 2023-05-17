import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, CssBaseline } from "@mui/material";

//image
import orgImage from "../static/images/ict-division.png";

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

export default function Organizations() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CssBaseline>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Box sx={{ borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="আমরা যাদের কাজ করছি" {...a11yProps(0)} />
              <Tab label="আমরা যেসকল সংস্থার সদস্য" {...a11yProps(1)} />
              <Tab label="আমাদের অন্যান্য প্রতিষ্ঠান" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <img src={orgImage} alt="organization" />
            <img src={orgImage} alt="organization" />
            <img src={orgImage} alt="organization" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <img src={orgImage} alt="organization" />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <img src={orgImage} alt="organization" />
            <img src={orgImage} alt="organization" />
          </TabPanel>
        </Container>
      </Box>
    </CssBaseline>
  );
}
